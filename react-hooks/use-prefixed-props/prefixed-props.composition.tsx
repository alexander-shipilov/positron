import React from "react";
import { prefixedProps } from "./prefixed-props";

export function ReturnsCorrectValue() {
  return <div>{prefixedProps()}</div>;
}
