export function urlWithParameters(
    url: string, parameters: {[name: string]: string | number | boolean | null | undefined} | null
): string {
    if (parameters == null) {
        return url;
    }

    let query = "";
    for (let name in parameters) {
        if (parameters.hasOwnProperty(name)) {
            const value = parameters[name];
            if (value != null) {
                query += (query === "" ? "" : "&") + name + "=" + encodeURIComponent(value);
            }
        }
    }
    if (query === "") {
        return url;
    }

    return url + (url.indexOf("?") < 0 ? "?" : "&") + query;
}

export function ut(strings: TemplateStringsArray, ...args: any[]): string {
    const all = [];
    let i = 0;
    while (i < strings.length || i < args.length) {
        if (i < strings.length) {
            all.push(strings[i]);
        }
        if (i < args.length) {
            all.push(encodeURIComponent(args[i]));
        }
        i++;
    }
    return all.join("");
}

export function commaSeparatedFlags(flags: Partial<Record<string, boolean>>): string | null {
    const names = Object.entries(flags).filter(([_, value]) => value).map(([name]) => name);
    return names.length > 0 ? names.join(',') : null;
}
