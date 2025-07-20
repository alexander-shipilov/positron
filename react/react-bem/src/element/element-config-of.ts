import type { Optional } from "@positron/core";
import type { ReactAnyProps } from "@positron/react-core";

import type { DescriptorNominal } from "../descriptor";

import type { ElementDescriptor } from "./element-descriptor";

/**
 * The {@link ElementConfigOf} creates an element config from the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get element config for.
 *
 * @internal
 */
export type ElementConfigOf<TValue> =
  TValue extends DescriptorNominal<infer Descriptor extends ElementDescriptor>
    ? {
        Component: Descriptor["Component"];
        className: Optional<string>;
        props: ReactAnyProps;
        value: Descriptor["value"];
      }
    : never;
