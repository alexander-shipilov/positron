import type { SymbolType } from "./symbol-type";
import { SYMBOL_TYPE } from "./symbol-type";

/**
 * The {@link isSymbolType} function checks if the passed
 * {@link maybeSymbolType} is a {@link SymbolType}.
 *
 * @param maybeSymbolType - The value to be tested for being
 *   a {@link SymbolType}.
 *
 * @returns The boolean value `true` if the passed {@link maybeSymbolType}
 *   value is a {@link SymbolType}.
 * @public
 */
export function isSymbolType(
  maybeSymbolType: unknown,
): maybeSymbolType is SymbolType {
  return maybeSymbolType === SYMBOL_TYPE;
}
