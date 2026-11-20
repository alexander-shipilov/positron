import { describe, expect, it } from "@jest/globals";

import { Type } from "./type";

describe("enum Type", () => {
  it("`Type.Null` should be 'null'", () => {
    expect(Type.Null).toBe("null");
  });

  it("`Type.Bigint` should be `typeof <bigint>`", () => {
    expect(Type.Bigint).toBe(typeof 1n);
  });

  it("`Type.Boolean` should be `typeof <boolean>`", () => {
    expect(Type.Boolean).toBe(typeof true);
  });

  it("`Type.Function` should be `typeof <function>`", () => {
    expect(Type.Function).toBe(typeof (() => {}));
  });

  it("`Type.Number` should be `typeof <number>`", () => {
    expect(Type.Number).toBe(typeof 1);
  });

  it("`Type.Object` should be `typeof <object>`", () => {
    expect(Type.Object).toBe(typeof {});
  });

  it("`Type.String` should be `typeof <string>`", () => {
    expect(Type.String).toBe(typeof "");
  });

  it("`Type.Symbol` should be `typeof <symbol>`", () => {
    expect(Type.Symbol).toBe(typeof Symbol());
  });

  it("`Type.Undefined` should be `typeof <undefined>`", () => {
    expect(Type.Undefined).toBe(typeof undefined);
  });
});
