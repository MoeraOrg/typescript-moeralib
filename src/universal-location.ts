import { URL } from 'url';
import { shorten } from "./naming";

export const REDIRECTOR = "moera.page";

/**
 * Represents location part of a universal Moera URL.
 */
class UniversalLocation {

    private _nodeName: string | null = null;
    private _scheme: string = "https";
    private _authority: string | null = null;
    private _path: string | null = null;

    /**
     * Query component of the URL.
     */
    query: string | null;
    /**
     * Fragment identifier of the URL.
     */
    fragment: string | null;

    /**
     * @param {string | null} nodeName - the node name
     * @param {string | null} scheme - scheme specifier of the node location (``'https'``, if set to `null` or empty)
     * @param {string | null} authority - authority (host name and optional port) of the node location
     * @param {string | null} path - virtual path at the node (``'/'``, if set to `null` or empty)
     * @param {string | null} query - query component of the URL (without ``?``)
     * @param {string | null} fragment - fragment identifier of the URL (without ``#``)
     */
    constructor(
        nodeName: string | null = null,
        scheme: string | null = null,
        authority: string | null = null,
        path: string | null = null,
        query: string | null = null,
        fragment: string | null = null
    ) {
        this.nodeName = nodeName;
        this.scheme = scheme;
        this.authority = authority;
        this.path = path;
        this.query = query;
        this.fragment = fragment;
    }

    /**
     * The node name.
     *
     * @return {string | null}
     */
    get nodeName(): string | null {
        return this._nodeName;
    }

    /**
     * The node name.
     *
     * @param {string | null} nodeName
     */
    set nodeName(nodeName: string | null) {
        this._nodeName = shorten(nodeName);
    }

    /**
     * Scheme specifier of the node location.
     *
     * @return {string | null}
     */
    get scheme(): string {
        return this._scheme;
    }

    /**
     * Scheme specifier of the node location.
     *
     * @param {string | null} scheme
     */
    set scheme(scheme: string | null) {
        this._scheme = scheme || "https";
    }

    /**
     * Authority (host name and optional port) of the node location.
     *
     * @return {string | null}
     */
    get authority(): string | null {
        return this._authority;
    }

    /**
     * Authority (host name and optional port) of the node location.
     *
     * @param {string | null} authority
     */
    set authority(authority: string | null) {
        this._authority = authority || null;
    }

    /**
     * Virtual path at the node.
     *
     * @return {string | null}
     */
    get path(): string | null {
        return this._path;
    }

    /**
     * Virtual path at the node.
     *
     * @param {string | null} path
     */
    set path(path: string | null) {
        if (path?.startsWith("/moera")) {
            path = path.substring(6);
        }
        this._path = path || "/";
    }

    /**
     * Universal Moera location (without query and fragment).
     *
     * @return {string | null}
     */
    get location(): string {
        let loc = "/@";
        if (this._nodeName != null) {
            loc += encodeURIComponent(this._nodeName);
        }
        loc += "/";
        if (this._authority != null) {
            if (this._scheme != null && this._scheme.toLowerCase() !== "https") {
                loc += this._scheme + ":";
            }
            loc += this._authority;
        } else {
            loc += "~";
        }
        loc += this._path;
        return loc;
    }

    toString(): string {
        let url = this.location;
        if (this.query != null) {
            url += "?" + this.query;
        }
        if (this.fragment != null) {
            url += "#" + this.fragment;
        }
        return url;
    }

}

function stripFirst(s: string | null | undefined): string | null {
    return s != null && s.length > 1 ? s.substring(1) : null;
}

/**
 * Parse the location part (including query and fragment) of a universal URL.
 *
 * @param {string | null} url - the URL to be parsed
 * @return {UniversalLocation} the parsed location
 */
export function parse(url: string | null): UniversalLocation {
    if (url == null) {
        return new UniversalLocation();
    }

    const parts = new URL(url);

    let path = parts.pathname.replace(/^\/|\/$/g, "");
    if (path === "") {
        return new UniversalLocation();
    }

    const dirs = path.split("/");
    if (!dirs[0].startsWith('@')) {
        return new UniversalLocation();
    }

    let nodeName: string | null = null;
    if (dirs[0].length > 1) {
        nodeName = decodeURIComponent(dirs[0].substring(1));
    }

    let scheme: string | null = null;
    let authority: string | null = null;
    let host: string | null = null;
    let port: string | null = null;

    if (dirs.length > 1 && dirs[1] !== "~") {
        const parts = dirs[1].split(":");
        let i = 0;
        if (!parts[i].includes(".")) {
            scheme = parts[i];
            i++;
        }
        if (i < parts.length) {
            host = parts[i];
            i++;
        }
        if (i < parts.length) {
            port = parts[i];
        }
    }

    if (host) {
        authority = host;
        if (port) {
            authority += ":" + port;
        }
    }

    path = "";
    dirs.slice(2).forEach(dir => path += `/${dir}`);
    if (path === "") {
        path = "/";
    }

    const query = stripFirst(parts.search);
    const fragment = stripFirst(parts.hash);

    return new UniversalLocation(nodeName, scheme, authority, path, query, fragment);
}

/**
 * Build a universal Moera URL from the direct URL of a page on a node, adding the node name provided.
 *
 * @param {string | null} nodeName - the node name
 * @param {string | null} url - the direct URL
 * @return {string} the universal URL
 */
export function redirectToUrl(nodeName: string | null, url: string | null = null): string {
    try {
        let uni: UniversalLocation;
        if (url != null) {
            const parts = new URL(url);
            uni = new UniversalLocation(
                nodeName,
                parts.protocol.slice(0, -1),
                parts.host,
                parts.pathname,
                stripFirst(parts.search),
                stripFirst(parts.hash)
            );
        } else {
            uni = new UniversalLocation(nodeName);
        }
        return `https://${REDIRECTOR}${uni}`;
    } catch (e) {
        return `https://${REDIRECTOR}`;
    }
}

/**
 * Build a universal Moera URL from the node name, the Moera root URL of the node, virtual path and other components.
 *
 * @param {string | null} nodeName - the node name
 * @param {string | null} rootUrl - the Moera root URL of the node
 * @param {string | null} path - virtual path at the node (``'/'``, if set to `null` or empty)
 * @param {string | null} query - query component of the URL
 * @param {string | null} fragment - fragment identifier of the URL
 * @return {string} the universal URL
 */
export function redirectTo(
    nodeName: string | null,
    rootUrl: string | null,
    path: string | null = null,
    query: string | null = null,
    fragment: string | null = null
): string {
    try {
        let uni: UniversalLocation;
        if (rootUrl != null) {
            const parts = new URL(rootUrl);
            uni = new UniversalLocation(
                nodeName,
                parts.protocol.slice(0, -1),
                parts.host,
                path,
                query,
                fragment
            );
        } else {
            uni = new UniversalLocation(nodeName, null, null, path, query, fragment);
        }
        return `https://${REDIRECTOR}${uni}`;
    } catch (error) {
        return `https://${REDIRECTOR}`;
    }
}
