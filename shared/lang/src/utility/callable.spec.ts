import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { Callable } from "./callable";

describe("type Callable<R, A>", () => {
  it("should match any function if `R` and `A` is omitted", () => {
    expectTypeOf<() => void>().toExtend<Callable>();
    expectTypeOf<(...args: Any) => void>().toExtend<Callable>();
    expectTypeOf<(...args: Any) => Any>().toExtend<Callable>();
    expectTypeOf<(...args: Any[]) => void>().toExtend<Callable>();
    expectTypeOf<(...args: Any[]) => Any>().toExtend<Callable>();
    expectTypeOf<(...args: never) => never>().toExtend<Callable>();
    expectTypeOf<(...args: never) => void>().toExtend<Callable>();
    expectTypeOf<(...args: never[]) => void>().toExtend<Callable>();
    expectTypeOf<(...args: never[]) => never>().toExtend<Callable>();
    expectTypeOf<(...args: unknown[]) => void>().toExtend<Callable>();
    expectTypeOf<(...args: unknown[]) => unknown>().toExtend<Callable>();
  });

  it("should match any function that returns `R` if `A` is omitted", () => {
    type R = number;

    expectTypeOf<() => R>().toExtend<Callable<R>>();
    expectTypeOf<(...args: Any) => R>().toExtend<Callable<R>>();
    expectTypeOf<(...args: Any[]) => R>().toExtend<Callable<R>>();
    expectTypeOf<(...args: never[]) => R>().toExtend<Callable<R>>();
    expectTypeOf<(...args: unknown[]) => R>().toExtend<Callable<R>>();
  });

  it("should not match function that returns not `R`", () => {
    type R = number;
    type I = string;

    expectTypeOf<() => I>().not.toExtend<Callable<R>>();
    expectTypeOf<(...args: Any) => I>().not.toExtend<Callable<R>>();
    expectTypeOf<(...args: Any[]) => I>().not.toExtend<Callable<R>>();
    expectTypeOf<(...args: never) => I>().not.toExtend<Callable<R>>();
    expectTypeOf<(...args: never[]) => I>().not.toExtend<Callable<R>>();
    expectTypeOf<(...args: unknown[]) => I>().not.toExtend<Callable<R>>();
  });

  it("should match any function that accepts `A` and returns `R`", () => {
    type R = number;
    type A = [number];

    expectTypeOf<() => R>().toExtend<Callable<R>>();
    expectTypeOf<() => R>().toExtend<Callable<R, Any>>();
    expectTypeOf<() => R>().toExtend<Callable<R, unknown[]>>();

    expectTypeOf<(arg: number) => R>().toExtend<Callable<R, A>>();
    expectTypeOf<(...args: A) => R>().toExtend<Callable<R, A>>();
  });
});
