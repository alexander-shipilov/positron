import { expectTypeOf } from "expect-type";

import type { AnyObject } from "@positron/core";

import type { MockComponentProps } from "../@fixtures";
import {
  MockComponent,
  MockComponentMemo,
  MockComponentNoArgs
} from "../@fixtures";

import type { ReactComponent } from "./react-component";

describe("ReactComponent<TProps>", () => {
  it("`ReactComponent` should match any function components", () => {
    expectTypeOf(MockComponentNoArgs).toExtend<ReactComponent>();
    expectTypeOf(MockComponent).toExtend<ReactComponent>();
    expectTypeOf(MockComponentMemo).toExtend<ReactComponent>();
  });

  it("`ReactComponent<TProps>` should match function components with `TProps` argument", () => {
    expectTypeOf(MockComponentNoArgs).toExtend<ReactComponent<AnyObject>>();
    expectTypeOf(MockComponent).toExtend<ReactComponent<MockComponentProps>>();
    expectTypeOf(MockComponentMemo).toExtend<
      ReactComponent<MockComponentProps>
    >();
  });

  it("should not match non-component functions", () => {
    expectTypeOf<() => AnyObject>().not.toExtend<ReactComponent>();
  });
});
