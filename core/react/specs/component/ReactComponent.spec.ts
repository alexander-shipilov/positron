import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { MockComponentProps } from "fixtures/mocks/component";
import type { ReactComponent } from "src/component";

import {
  MockComponent,
  MockComponentForwardRef,
  MockComponentMemo,
} from "fixtures/mocks/component";

describe("ReactComponent", () => {
  it("should match a functional component", () => {
    expectTypeOf(MockComponent).toMatchTypeOf<
      ReactComponent<MockComponentProps>
    >();
  });

  it("should match a `memo` component", () => {
    expectTypeOf(MockComponentMemo).toMatchTypeOf<
      ReactComponent<MockComponentProps>
    >();
  });

  it("should match a `forwardRef` component", () => {
    expectTypeOf(MockComponentForwardRef).toMatchTypeOf<
      ReactComponent<MockComponentProps>
    >();
  });
});
