import { never } from "@positron/lang-core";

export function ReactNever(): never {
  return never("Cannot render `ReactNever` component");
}
