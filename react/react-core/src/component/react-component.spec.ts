import type { EmptyObject } from "@positron/core";

import { expectTypeOf } from "expect-type";

import type { MockComponentProps } from "../__fixtures__";
import type { ReactComponent } from "./react-component";

import {
  MockComponent,
  MockComponentMemo,
  MockComponentNoArgs,
} from "../__fixtures__";

describe("ReactComponent<TProps>", () => {
  it("`ReactComponent` should match any function components", () => {
    expectTypeOf(MockComponentNoArgs).toExtend<ReactComponent>();
    expectTypeOf<typeof MockComponent>().toExtend<ReactComponent>();
    expectTypeOf(MockComponentMemo).toExtend<ReactComponent>();
  });

  it("`ReactComponent<TProps>` should match function components with `TProps` argument", () => {
    expectTypeOf(MockComponentNoArgs).toExtend<ReactComponent<EmptyObject>>();
    expectTypeOf(MockComponent).toExtend<ReactComponent<MockComponentProps>>();
    expectTypeOf(MockComponentMemo).toExtend<
      ReactComponent<MockComponentProps>
    >();
  });

  it("should not match non-component functions", () => {
    expectTypeOf<() => EmptyObject>().not.toExtend<ReactComponent>();
  });
});
