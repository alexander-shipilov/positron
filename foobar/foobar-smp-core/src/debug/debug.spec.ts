import { describe, expect, it } from "@jest/globals";

import { debug } from "./debug";

describe(`${debug.name}(value)`, () => {
  it("should return 'null' if `value` is `null`", () => {
    expect(debug(null)).toBe("null");
  });

  it("should return 'undefined' if `value` is `undefined`", () => {
    expect(debug(undefined)).toBe("undefined");
  });

  it("should return the '\"<value>\"' if value is a string", () => {
    expect(debug("")).toBe('""');
    expect(debug("'")).toBe('"\'"');
    expect(debug('"')).toBe('"\\""');
  });

  it("should return 'String(\"<value>\") {...}' if `value` is a `String` object", () => {
    expect(debug(new String("foo"))).toBe('String(3) [0: "f", 1: "o", 2: "o"]');
    expect(debug(Object.assign("foo", { foo: 1 }))).toBe(
      'String(3) [0: "f", 1: "o", 2: "o", "foo": 1]',
    );
  });

  it("should return 'true' or 'false' if `value` is a boolean", () => {
    expect(debug(true)).toBe("true");
    expect(debug(false)).toBe("false");
  });

  it("should return 'Boolean(<value>) {...}' if `value` is a `Boolean` object", () => {
    expect(debug(new Boolean(true))).toBe("Boolean(true)");
    expect(debug(Object.assign(false, { foo: 1 }))).toBe(
      'Boolean(false) {"foo": 1}',
    );
  });

  it(`should return '<value>' if \`value\` is a finite number`, () => {
    expect(debug(1)).toBe("1");
    expect(debug(1e1)).toBe("10");
    expect(debug(1e100)).toBe("1e+100");
    expect(debug(1e-1)).toBe("0.1");
    expect(debug(1e-100)).toBe("1e-100");
  });

  it("should return 'NaN' if `value` is `NaN`", () => {
    expect(debug(NaN)).toBe("NaN");
  });

  it("should return 'Infinity' or '-Infinity' if `value` is not a finite number", () => {
    expect(debug(Infinity)).toBe("Infinity");
    expect(debug(-Infinity)).toBe("-Infinity");
  });

  it("should return 'Number(<value>) {...}' if `value` is a `Number` object", () => {
    expect(debug(new Number(1))).toBe("Number(1)");
    expect(debug(new Number(Infinity))).toBe("Number(Infinity)");
    expect(debug(new Number(NaN))).toBe("Number(NaN)");
    expect(debug(Object.assign(1e100, { foo: 1 }))).toBe(
      'Number(1e+100) {"foo": 1}',
    );
  });

  it("should return 'Symbol(...)' if `value` is a symbol", () => {
    expect(debug(Symbol())).toBe("Symbol()");
    expect(debug(Symbol("foo"))).toBe("Symbol(foo)");
  });

  it("should return 'Symbol(...) {...}' if `value` is a `Symbol` object", () => {
    expect(debug(Object.assign(Symbol("foo"), { foo: 1 }))).toBe(
      'Symbol(foo) {"foo": 1}',
    );
  });

  it("should return 'function <name> {...}' if `value` is a function", () => {
    expect(debug(function foo() {})).toBe("function foo");
    expect(debug(() => null)).toBe("function");

    expect(debug(Object.assign(() => null, { foo: 1 }))).toBe(
      'function {"foo": 1}',
    );
  });

  it("should return 'Array(<length>) [...]' if `value` is an `Array`", () => {
    // eslint-disable-next-line no-sparse-arrays
    expect(debug([1, , "a", {}])).toBe('Array(4) [0: 1, 2: "a", 3: {}]');
    expect(debug(new (class extends Array {})(2))).toBe("<Array>(2)");

    // eslint-disable-next-line no-sparse-arrays
    expect(debug(Object.assign([1, , 3], { [-1]: 1, [1.1]: 1, foo: 1 }))).toBe(
      'Array(3) [0: 1, 2: 3, "-1": 1, "1.1": 1, "foo": 1]',
    );
  });

  it("should return '<TypedArray>(<length>) [...]' if `value` is a `TypedArray`", () => {
    expect(debug(new Uint8Array(3))).toBe("Uint8Array(3) [0: 0, 1: 0, 2: 0]");
    expect(debug(new Uint32Array(3))).toBe("Uint32Array(3) [0: 0, 1: 0, 2: 0]");
    expect(
      debug(Object.assign(new Uint8Array(2), { [-1]: 1, [1.1]: 1, foo: 1 })),
    ).toBe('Uint8Array(2) [0: 0, 1: 0, "foo": 1]');
  });

  it("should return 'DataView {...}' if `value` is a `DataView`", () => {
    expect(debug(new DataView(new ArrayBuffer(16)))).toBe("DataView");
    expect(
      debug(Object.assign(new DataView(new ArrayBuffer(16)), { foo: 1 })),
    ).toBe('DataView {"foo": 1}');
  });

  it("should return '{...}' if `value` is the `Intl` object", () => {
    expect(debug(Intl)).toBe("{}");
    expect(debug(Object.assign(Intl, { foo: 1 }))).toBe('{"foo": 1}');
  });

  it("should return '<Object> {...}' if `value` is an `Object`", () => {
    expect(debug({})).toBe("{}");
    expect(debug(Object.create(null))).toBe("<Object>");
    expect(debug({ bar: String, foo: String })).toBe(
      '{"bar": function String, "foo": function String}',
    );
    expect(debug({ bar: 1, foo: "", [Symbol.iterator]: 1 })).toBe(
      '{"bar": 1, "foo": "", [Symbol(Symbol.iterator)]: 1}',
    );
  });

  it("should return '#circular<ref>' for circular refs", () => {
    const circular = (value: object) =>
      Object.assign(value, { circular: value });

    expect(debug(circular({}))).toBe(
      '<ref *1> {"circular": #circular<ref *1>}',
    );
    expect(debug(circular([]))).toBe(
      '<ref *1> Array(0) ["circular": #circular<ref *1>]',
    );
    expect(debug(circular(/a/))).toBe(
      '<ref *1> RegExp(/a/) {"circular": #circular<ref *1>}',
    );
    expect(debug(circular(new String("")))).toBe(
      '<ref *1> String(0) ["circular": #circular<ref *1>]',
    );
    expect(debug(circular(circular))).toBe(
      '<ref *1> function circular {"circular": #circular<ref *1>}',
    );
    expect(
      debug(Object.assign(circular(circular), { v1: circular(circular) })),
    ).toBe(
      '<ref *1> function circular {"circular": #circular<ref *1>, "v1": #circular<ref *1>}',
    );
    expect(debug(circular([circular({})]))).toBe(
      '<ref *2> Array(1) [0: <ref *1> {"circular": #circular<ref *1>}, "circular": #circular<ref *2>]',
    );
    expect(debug(Object.assign(circular([]), { v2: circular({}) }))).toBe(
      '<ref *1> Array(0) ["circular": #circular<ref *1>, "v2": <ref *2> {"circular": #circular<ref *2>}]',
    );
  });

  it("should return 'Date(<value>) {...}' if `value` is a `Date`", () => {
    expect(debug(new Date(0))).toBe("Date(Thu, 01 Jan 1970 00:00:00 GMT)");
    expect(debug(new (class extends Date {})(0))).toBe(
      "<Date>(Thu, 01 Jan 1970 00:00:00 GMT)",
    );
    expect(debug(Object.assign(new Date(0), { foo: 1 }))).toBe(
      'Date(Thu, 01 Jan 1970 00:00:00 GMT) {"foo": 1}',
    );
  });

  it("should return '<Error>(<message>) {...}' if `value` is a `Error`", () => {
    expect(debug(new Error("foo"))).toBe('Error("foo")');
    expect(debug(new SyntaxError("foo"))).toBe('SyntaxError("foo")');
    expect(debug(new (class extends Error {})("foo"))).toBe('<Error>("foo")');

    expect(debug(Object.assign(new Error("foo"), { foo: 1 }))).toBe(
      'Error("foo") {"foo": 1}',
    );
  });

  it("should return 'RegExp(<value>) {...}' if `value` is a `RegExp`", () => {
    expect(debug(/a+?/)).toBe("RegExp(/a+?/)");
    expect(debug(Object.assign(/a+?/, { foo: 1 }))).toBe(
      'RegExp(/a+?/) {"foo": 1}',
    );
  });

  it("should return 'Map(<count>) {...}' if `value` is a `Map`", () => {
    expect(debug(new Map())).toBe("Map(0)");
    expect(
      debug(
        new Map<unknown, unknown>([
          ["foo", "bar"],
          [1, 1],
          [{}, { foo: "bar" }],
          [true, false],
        ]),
      ),
    ).toBe('Map(4) {"foo" = "bar", 1 = 1, {} = {"foo": "bar"}, true = false}');
    expect(
      debug(
        new Map<unknown, unknown>([
          [new Map([[1, 2]]), new Map([[1, 2]])],
          [new Set([1]), new Set([1, 2])],
        ]),
      ),
    ).toBe(
      "Map(2) {Map(1) {1 = 2} = Map(1) {1 = 2}, Set(1) {1} = Set(2) {1, 2}}",
    );
    expect(debug(Object.assign(new Map([]), { foo: 1 }))).toBe(
      'Map(0) {"foo": 1}',
    );
  });

  it("should return 'Set(<count>) {...}' if `value` is a `Set`", () => {
    expect(debug(new Set())).toBe("Set(0)");
    expect(debug(new Set(["", 1, {}, new Set(), Symbol.iterator]))).toBe(
      'Set(5) {"", 1, {}, Set(0), Symbol(Symbol.iterator)}',
    );
    expect(debug(Object.assign(new Set([]), { foo: 1 }))).toBe(
      'Set(0) {"foo": 1}',
    );
  });

  it("should return 'WeekMap() {...}' if `value` is a `WeekMap`", () => {
    expect(debug(new WeakMap())).toBe("WeakMap()");
    expect(debug(Object.assign(new WeakMap(), { foo: 1 }))).toBe(
      'WeakMap() {"foo": 1}',
    );
  });

  it("should return 'WeekSet() {...}' if `value` is a `WeekSet`", () => {
    expect(debug(new WeakSet())).toBe("WeakSet()");
    expect(debug(Object.assign(new WeakSet(), { foo: 1 }))).toBe(
      'WeakSet() {"foo": 1}',
    );
  });
});
