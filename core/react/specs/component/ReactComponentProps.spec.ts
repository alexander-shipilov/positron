import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type {
  MockComponent,
  MockComponentForwardRef,
  MockComponentMemo,
  MockComponentProps,
} from "fixtures/mocks/component";
import type { ReactComponentProps } from "src/component";

describe("ReactComponentProps<Component>", () => {
  it("should extract props from functional component", () => {
    expectTypeOf<
      ReactComponentProps<typeof MockComponent>
    >().toEqualTypeOf<MockComponentProps>();
  });

  it("should extract props from `memo`", () => {
    expectTypeOf<
      ReactComponentProps<typeof MockComponentMemo>
    >().toEqualTypeOf<MockComponentProps>();
  });

  it("should extract props from `forwardRef`", () => {
    expectTypeOf<
      ReactComponentProps<typeof MockComponentForwardRef>
    >().toMatchTypeOf<MockComponentProps>();
  });

  it("should be `never` if `Component` is not `ReactComponent`", () => {
    expectTypeOf<ReactComponentProps<() => void>>().toBeNever();
  });
});
