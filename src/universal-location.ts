import { URL } from 'url';
import { shorten } from "./naming";

export const REDIRECTOR = "moera.page";

class UniversalLocation {

    private _nodeName: string | null = null;
    private _scheme: string = "https";
    private _authority: string | null = null;
    private _path: string | null = null;

    query: string | null;
    fragment: string | null;

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

    get nodeName(): string | null {
        return this._nodeName;
    }

    set nodeName(nodeName: string | null) {
        this._nodeName = shorten(nodeName);
    }

    get scheme(): string {
        return this._scheme;
    }

    set scheme(scheme: string | null) {
        this._scheme = scheme || "https";
    }

    get authority(): string | null {
        return this._authority;
    }

    set authority(authority: string | null) {
        this._authority = authority || null;
    }

    get path(): string | null {
        return this._path;
    }

    set path(path: string | null) {
        if (path?.startsWith("/moera")) {
            path = path.substring(6);
        }
        this._path = path || "/";
    }

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
