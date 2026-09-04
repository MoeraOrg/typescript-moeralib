const assert = require("node:assert/strict");
const {test} = require("node:test");

const {NodeSourceUri} = require("../lib/index.js");

test("parse keeps the URI and replaces duplicate parameters", () => {
    const source = NodeSourceUri.parse(
        "https://example/node?a=b;via_email;name=first;name=last;=ignored"
    );

    assert.equal(source.uri, "https://example/node?a=b");
    assert.equal(source.getParameter(NodeSourceUri.VIA_EMAIL), "");
    assert.equal(source.getParameter("name"), "last");
    assert.deepEqual(Object.keys(source.parameters), ["via_email", "name"]);
    assert.equal(source.toString(), "https://example/node?a=b;via_email=;name=last");
    assert.equal(source.hasParameter(""), false);
    assert.equal(source.getParameter("missing"), undefined);
});

test("encoding is RFC 3986 and malformed escapes remain literal", () => {
    const source = NodeSourceUri.parse(
        "node;label=%D0%9C%D0%B8%D1%80%20%2B;reserved=%21%27%28%29%2A;equals=a=b;bad=%ZZ%2"
    );

    assert.equal(source.getParameter("label"), "Мир +");
    assert.equal(source.getParameter("reserved"), "!'()*");
    assert.equal(source.getParameter("equals"), "a=b");
    assert.equal(source.getParameter("bad"), "%ZZ%2");
    assert.equal(
        source.toString(),
        "node;label=%D0%9C%D0%B8%D1%80%20%2B;reserved=%21%27%28%29%2A;equals=a%3Db;bad=%25ZZ%252"
    );
});

test("default state supports programmatic updates", () => {
    const source = new NodeSourceUri();

    assert.equal(source.uri, "");
    assert.equal(source.toString(), "");

    source.uri = "https://example/node?a=b";
    source.setParameter(NodeSourceUri.VIA_EMAIL, "true");
    source.setParameter("", "ignored");

    assert.equal(source.hasParameter(NodeSourceUri.VIA_EMAIL), true);
    assert.equal(source.toString(), "https://example/node?a=b;via_email=true");
});

test("programmatic URI rejects a semicolon", () => {
    const source = new NodeSourceUri();

    assert.throws(() => {
        source.uri = "https://example/node;parameter";
    }, TypeError);
});

test("parameters are copied and exposed as a mutable object", () => {
    const parameters = {first: "one", "": "ignored"};
    const source = new NodeSourceUri();
    source.setParameters(parameters);
    const view = source.parameters;

    parameters.second = "external";
    source.setParameter("second", "internal");
    view.third = "direct";

    assert.strictEqual(source.parameters, view);
    assert.deepEqual(view, {first: "one", second: "internal", third: "direct"});
    assert.equal(source.getParameter("second"), "internal");
    assert.equal(source.getParameter("third"), "direct");

    source.setParameters({fourth: "replacement"});

    assert.notStrictEqual(source.parameters, view);
    assert.deepEqual(source.parameters, {fourth: "replacement"});
});

test("malformed UTF-8 is replaced", () => {
    const source = NodeSourceUri.parse("node;value=%FF%61");

    assert.equal(source.getParameter("value"), "\uFFFDa");
});

test("service is identified from the URI", () => {
    assert.equal(
        NodeSourceUri.parse("https://t.me/moera").getService(),
        "telegram"
    );
    assert.equal(NodeSourceUri.parse("https://example.com/moera").getService(), undefined);
});
