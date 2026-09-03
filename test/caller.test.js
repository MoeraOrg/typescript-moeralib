const assert = require("node:assert/strict");
const {readFileSync} = require("node:fs");
const {createServer} = require("node:https");
const {afterEach, test} = require("node:test");

const {Caller, MoeraNodeConnectionError} = require("../lib/node/caller.js");
const {version: packageVersion} = require("../package.json");

const originalFetch = global.fetch;

afterEach(() => {
    global.fetch = originalFetch;
});

test("userAgent sends the configured User-Agent header", async () => {
    let requestHeaders;
    global.fetch = async (_url, options) => {
        requestHeaders = options.headers;
        return {
            ok: true,
            blob: async () => Buffer.alloc(0)
        };
    };

    const caller = new Caller();
    caller.nodeUrl("https://example.com");
    caller.userAgent("Example Client/1.0");

    await caller.call("test", "/test", {schema: "blob"});

    assert.equal(requestHeaders["User-Agent"], "Example Client/1.0");
});

test("requests use the moeralib package version as the default User-Agent", async () => {
    let requestHeaders;
    global.fetch = async (_url, options) => {
        requestHeaders = options.headers;
        return {
            ok: true,
            blob: async () => Buffer.alloc(0)
        };
    };

    const caller = new Caller();
    caller.nodeUrl("https://example.com");

    await caller.call("test", "/test", {schema: "blob"});

    assert.equal(requestHeaders["User-Agent"], `moeralib/${packageVersion}`);
});

test("verifySsl disables certificate verification only for the configured caller", async () => {
    global.fetch = originalFetch;
    const server = createServer({
        key: readFileSync(`${__dirname}/fixtures/localhost-key.pem`),
        cert: readFileSync(`${__dirname}/fixtures/localhost-cert.pem`)
    }, (_request, response) => {
        response.setHeader("Connection", "close");
        response.end("ok");
    });
    await new Promise(resolve => server.listen(0, "localhost", resolve));

    try {
        const {port} = server.address();
        const nodeUrl = `https://localhost:${port}`;

        const insecureCaller = new Caller();
        insecureCaller.nodeUrl(nodeUrl);
        insecureCaller.verifySsl(false);
        await insecureCaller.call("test", "/test", {schema: "blob"});

        const secureCaller = new Caller();
        secureCaller.nodeUrl(nodeUrl);
        await assert.rejects(
            secureCaller.call("test", "/test", {schema: "blob"}),
            MoeraNodeConnectionError
        );
    } finally {
        server.closeAllConnections();
        await new Promise(resolve => server.close(resolve));
    }
});
