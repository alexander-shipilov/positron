import { never } from "@positron/core";

export function DescriptorAbstract() {
  return never(
    "Cannot render an abstract component." +
      " You should specify a concrete component instead.",
  );
}
