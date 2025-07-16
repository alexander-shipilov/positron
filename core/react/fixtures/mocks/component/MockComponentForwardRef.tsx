import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";

import type { MockComponentProps } from "./MockComponentProps";

export const MockComponentForwardRef = forwardRef(
  (props: MockComponentProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...props} ref={ref} />
  ),
);
