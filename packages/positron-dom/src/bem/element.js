import { toKebabCase, warning } from "positron-core";
import { bem } from "./bem";
import { block } from "./block";

export function element(blockName, elementName, modifiers = null, ...other) {
  elementName = toKebabCase(elementName);

  if (elementName === "") {
    warning("invalid element");
  } else {
    elementName = bem(block(blockName) + "__" + elementName, modifiers, ...other);
  }

  return elementName;
}
