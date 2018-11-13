// @flow

import type { AlignProps } from "./rect";
import { BoundedRect, Bounds, Rect } from "./rect";

export function alignTo(el: HTMLElement, toEl: Element, props: AlignProps): Bounds[] {
  return BoundedRect.fromElement(toEl).align(Rect.fromElement(el), props);
}
