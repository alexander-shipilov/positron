import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { AnyObject } from "@positron/core/src";
import type { ReactComponent } from "@positron/react-core/src";

import type { ElementConfig } from "./element-config";
import type { ElementMeta } from "./element-meta";

describe("ElementConfig<V, P, M>", () => {
  it(
    "should be `{\n" + //
      "  readonly Component: ReactComponent<P>,\n" +
      "  readonly meta: M,\n" +
      "  readonly value: AnyObject,\n" +
      "  readonly props: P,\n" +
      "}`",
    () => {
      type T1 = ElementConfig<string, { foo: 1 }, ElementMeta & { bar: 2 }>;
      expectTypeOf<T1>().toEqualTypeOf<{
        readonly Component: ReactComponent<{ foo: 1 }>;
        readonly meta: ElementMeta & { bar: 2 };
        readonly props: AnyObject;
        readonly value: string;
      }>();
    },
  );
});
