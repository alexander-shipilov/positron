import type { ReactNode } from "react";

import type { MockComponentProps } from "./mock-component-props";

export function MockComponent(props: MockComponentProps): ReactNode {
  return props.foo;
}
