import type { Integer } from "../../number";

export function sign(value: Integer): Integer {
  return Math.sign(value) as Integer;
}
