// @flow

import { parseAlign } from "./parseAlign";
import type { AlignProps } from "./rect";

export function parseAligns(props: string): AlignProps[] {
  return props.split(/\s*\|\s*/).map(parseAlign);
}
