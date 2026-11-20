import { isArray } from "../array/is-array";
import { isArrayLike } from "../array/is-array-like";
import { isBoolean } from "../boolean/is-boolean";
import { isFunction } from "../function/is-function";
import { getOwnKeys } from "../key/get-own-keys";
import { isNumber } from "../number/is-number";
import { isString } from "../string/is-string";
import { isSymbol } from "../symbol/is-symbol";
import { typeOf } from "../type/type-of";

/**
 * The {@link DebugContext} type represents debug context.
 *
 * @internal
 */
type DebugContext = {
  circulars: object[];
  spaces: string;
  stack: object[];
};

/**
 * @param value -
 *
 * @param context -
 */
function debugArray(value: readonly unknown[], context: DebugContext): string {
  return debugArrayLike(formatTag(value, "Array"), value, context);
}

/**
 * @param tag -
 *
 * @param value -
 *
 * @param context -
 */
function debugArrayLike(
  tag: string,
  value: ArrayLike<unknown>,
  context: DebugContext,
): string {
  const props = formatProps(debugArrayLikeItems(value, context), context, "[]");

  return formatObject(
    formatRef(value, context),
    tag + "(" + String(value.length) + ")",
    props,
  );
}

/**
 * @param key -
 *
 * @param item -
 *
 * @param value -
 *
 * @param context -
 */
function debugArrayLikeItem(
  key: string | symbol,
  item: unknown,
  value: ArrayLike<unknown>,
  context: DebugContext,
): string {
  const index = isSymbol(key) ? NaN : parseFloat(key);
  const isIndex = Number.isInteger(index) && index >= 0 && index < value.length;

  return debugObjectKey(isIndex ? index : key, item, context);
}

/**
 * @param value -
 *
 * @param context -
 */
function debugArrayLikeItems(
  value: ArrayLike<unknown>,
  context: DebugContext,
): string[] {
  return getOwnKeys(value).map((key) =>
    debugArrayLikeItem(key, value[key], value, context),
  );
}

/**
 * @param value -
 */
function debugBoolean(value: boolean): string {
  return JSON.stringify(value);
}

/**
 * @param value -
 *
 * @param context -
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
function debugBooleanObject(value: Boolean, context: DebugContext): string {
  return debugObjectLike(
    formatTag(value, "Boolean"),
    value,
    String(value),
    context,
  );
}

/**
 * @param value -
 *
 * @param context -
 */
function debugDate(value: Date, context: DebugContext): string {
  return debugObjectLike(
    formatTag(value, "Date"),
    value,
    value.toUTCString(),
    context,
  );
}

/**
 * @param value -
 *
 * @param context -
 */
function debugError(value: Error, context: DebugContext): string {
  return debugObjectLike(
    formatTag(value, "Error"),
    value,
    JSON.stringify(value.message),
    context,
  );
}

/**
 * @param value -
 *
 * @param context -
 */
function debugFunction(
  value: (...args: never[]) => unknown,
  context: DebugContext,
): string {
  const tag = "function";
  const { name } = value;

  return debugObjectLike(name ? `${tag} ${name}` : tag, value, "", context);
}

/**
 * @param value -
 *
 * @param context -
 */
function debugMap(value: Map<unknown, unknown>, context: DebugContext): string {
  const props = formatProps(
    [...debugMapItems(value, context), ...debugObjectProps(value, context)],
    context,
    "{}",
  );

  return formatObject(
    formatRef(value, context),
    formatTag(value, "Map") + "(" + String(value.size) + ")",
    props,
  );
}

/**
 * @param key -
 *
 * @param value -
 *
 * @param context -
 */
function debugMapItem(
  key: unknown,
  value: unknown,
  context: DebugContext,
): string {
  return `${debugValue(key, context)} = ${debugValue(value, context)}`;
}

/**
 * @param map -
 *
 * @param context -
 */
function debugMapItems(
  map: Map<unknown, unknown>,
  context: DebugContext,
): string[] {
  return [...map.entries()].map(([key, value]) =>
    debugMapItem(key, value, context),
  );
}

/**
 * @param value -
 */
function debugNumber(value: number): string {
  return isFinite(value) ? JSON.stringify(value) : String(value);
}

/**
 * @param value -
 *
 * @param context -
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
function debugNumberObject(value: Number, context: DebugContext): string {
  return debugObjectLike(
    formatTag(value, "Number"),
    value,
    debugNumber(Number(value)),
    context,
  );
}

/**
 * @param value -
 *
 * @param context -
 */
function debugObject(value: object, context: DebugContext): string {
  return debugObjectLike(formatTag(value, "Object"), value, "", context);
}

/**
 * @param key -
 *
 * @param value -
 *
 * @param context -
 */
function debugObjectKey(
  key: PropertyKey,
  value: unknown,
  context: DebugContext,
) {
  const keyString = debugValue(key, context);

  return `${isSymbol(key) ? `[${keyString}]` : keyString}: ${debugValue(value, context)}`;
}

/**
 * @param tag -
 *
 * @param value -
 *
 * @param stringValue -
 *
 * @param context -
 */
function debugObjectLike(
  tag: string,
  value: object,
  stringValue: string = "",
  context: DebugContext,
): string {
  const props = formatProps(debugObjectProps(value, context), context, "{}");

  return formatObject(
    formatRef(value, context),
    [
      ...(tag === "" || tag === "Object" ? [] : [tag]),
      ...(stringValue === "" ? [] : [`(${stringValue})`]),
    ].join(""),
    props,
  );
}

/**
 * @param value -
 *
 * @param context -
 */
function debugObjectProps(value: object, context: DebugContext): string[] {
  return getOwnKeys(value).map((key) =>
    debugObjectKey(key, value[key], context),
  );
}

/**
 * @param value -
 *
 * @param context -
 */
function debugReference(value: object, context: DebugContext): string {
  const { circulars, stack } = context;

  if (stack.findIndex((item) => Object.is(item, value)) === -1) {
    const nextContext: DebugContext = { ...context, stack: [...stack, value] };

    switch (true) {
      case value instanceof Boolean:
        return debugBooleanObject(value, nextContext);

      case value instanceof String:
        return debugStringObject(value, nextContext);

      case value instanceof Number:
        return debugNumberObject(value, nextContext);

      case value instanceof Symbol:
        return debugSymbolObject(value, nextContext);

      case isFunction(value):
        return debugFunction(value, nextContext);

      case isArray(value):
        return debugArray(value, nextContext);

      case ArrayBuffer.isView(value) && isArrayLike(value):
        return debugTypedArray(value, nextContext);

      case value instanceof Date:
        return debugDate(value, nextContext);

      case value instanceof Error:
        return debugError(value, nextContext);

      case value instanceof RegExp:
        return debugRegExp(value, nextContext);

      case value instanceof Map:
        return debugMap(value, nextContext);

      case value instanceof WeakMap:
        return debugWeekMap(value, nextContext);

      case value instanceof Set:
        return debugSet(value, nextContext);

      case value instanceof WeakSet:
        return debugWeekSet(value, nextContext);

      default:
        return debugObject(value, nextContext);
    }
  }

  if (circulars.findIndex((item) => Object.is(item, value)) === -1) {
    circulars.push(value);
  }

  return `#circular${formatRef(value, context)}`;
}

/**
 * @param value -
 *
 * @param context -
 */
function debugRegExp(value: RegExp, context: DebugContext) {
  return debugObjectLike(
    formatTag(value, "RegExp"),
    value,
    String(value),
    context,
  );
}

/**
 * @param value -
 *
 * @param context -
 */
function debugSet(value: Set<unknown>, context: DebugContext): string {
  const props = formatProps(
    [...debugSetItems(value, context), ...debugObjectProps(value, context)],
    context,
    "{}",
  );

  return formatObject(
    formatRef(value, context),
    formatTag(value, "Set") + "(" + String(value.size) + ")",
    props,
  );
}

/**
 * @param value -
 *
 * @param context -
 */
function debugSetItems(value: Set<unknown>, context: DebugContext) {
  return [...value.values()].map((item) =>
    debugValue(item, { ...context, stack: context.stack }),
  );
}

/**
 * @param value -
 */
function debugString(value: string): string {
  return JSON.stringify(value);
}

/**
 * @param value -
 *
 * @param context -
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
function debugStringObject(value: String, context: DebugContext): string {
  return debugArrayLike(formatTag(value, "String"), value, context);
}

/**
 * @param value -
 */
function debugSymbol(value: symbol): string {
  return value.toString();
}

/**
 * @param value -
 *
 * @param context -
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
function debugSymbolObject(value: Symbol, context: DebugContext): string {
  return debugObjectLike(debugSymbol(value as symbol), value, "", context);
}

/**
 * @param value -
 *
 * @param context -
 */
function debugTypedArray(
  value: ArrayLike<unknown>,
  context: DebugContext,
): string {
  return debugArrayLike(formatTag(value, "TypedArray"), value, context);
}

/**
 * @param value -
 *
 * @param context -
 */
function debugValue(value: unknown, context: DebugContext): string {
  switch (true) {
    case value == null:
      return typeOf(value);

    case isBoolean(value):
      return debugBoolean(value);

    case isNumber(value):
      return debugNumber(value);

    case isString(value):
      return debugString(value);

    case isSymbol(value):
      return debugSymbol(value);

    default:
      return debugReference(value, context);
  }
}

/**
 * @param value -
 *
 * @param context -
 */
function debugWeekMap(value: WeakMap<WeakKey, unknown>, context: DebugContext) {
  const props = formatProps(debugObjectProps(value, context), context, "{}");

  return formatObject(
    formatRef(value, context),
    formatTag(value, "WeakMap") + "()",
    props,
  );
}

/**
 * @param value -
 *
 * @param context -
 */
function debugWeekSet(value: WeakSet<object>, context: DebugContext) {
  const props = formatProps(debugObjectProps(value, context), context, "{}");

  return formatObject(
    formatRef(value, context),
    formatTag(value, "WeakSet") + "()",
    props,
  );
}

/**
 * @param ref -
 *
 * @param name -
 *
 * @param props -
 */
function formatObject(ref: string, name: string, props: string): string {
  return [
    ...(ref === "" ? [] : [ref]),
    ...(name === "" ? [] : [name]),
    ...(props === "" ? (name === "" ? ["{}"] : []) : [props]),
  ].join(" ");
}

/**
 * @param props -
 *
 * @param context -
 *
 * @param brackets -
 */
function formatProps(
  props: string[],
  context: DebugContext,
  brackets: string,
): string {
  const { spaces, stack } = context;
  const { length: depth } = stack;

  return props.length === 0
    ? ""
    : spaces === ""
      ? brackets[0] + props.join(", ") + brackets[1]
      : brackets[0] +
        `\n${props.map((prop) => spaces.repeat(depth) + prop).join(",\n")}` +
        `\n${spaces.repeat(depth - 1)}` +
        brackets[1];
}

/**
 * @param value -
 *
 * @param context -
 */
function formatRef(value: object, context: DebugContext): string {
  const ref = context.circulars.findIndex((item) => Object.is(item, value));

  return ref === -1 ? "" : `<ref *${String(ref + 1)}>`;
}

/**
 * @param value -
 *
 * @param defaultTag -
 */
function formatTag(value: unknown, defaultTag: string): string {
  const tag =
    {}.toString.call(value).match(/\[object (\w+)]/)?.[1] ??
    value?.constructor?.name;

  return tag ?? `<${defaultTag}>`;
}

/**
 * The {@link debug} function returns a human-readable representation of the
 * passed value.
 *
 * @param value - The value to convert to a human-readable string.
 *
 * @param spaces - The number that indicates the number of space
 *   characters to be used as indentation, clamped to `10` (that is, any number
 *   greater than `10` is treated as if it were `10`). Values less than `1`
 *   indicate that no space should be used. Default is `0`.
 *
 * @public
 */
export function debug(value: unknown, spaces: number = 0): string {
  return debugValue(value, {
    circulars: [],
    spaces: " ".repeat(Math.max(Math.min(Math.round(spaces), 10))),
    stack: [],
  });
}
