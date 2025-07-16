import type { JSX } from "react";

import type { ElementTag } from "src/ElementTag";

export type ElementProps<TTag extends ElementTag> =
  JSX.IntrinsicElements[TTag] & {
    /**
     * Tag
     */
    element: TTag;

    /**
     * Reference object to store element
     */
    elementRef?: JSX.IntrinsicElements[TTag]["ref"];
  };
