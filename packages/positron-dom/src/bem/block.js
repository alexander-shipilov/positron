import { toKebabCase, warning } from "positron-core";
import { bem } from "./bem";

export function block(blockName, modifiers = null, ...other) {
    blockName = toKebabCase(blockName);

    if (blockName === "") {
        warning("invalid block");
    } else {
        blockName = bem(blockName, modifiers, ...other);
    }

    return blockName;
}
