import { never } from "@positron/core";

export function ReactNever(): never {
  return never("Cannot render `ReactNever` component");
}
