import type { Integer } from "../../number";

export function neg(value: Integer): Integer {
  return (value === 0 ? value : 0 - value) as Integer;
}
