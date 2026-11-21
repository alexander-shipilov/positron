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
 * The {@link DebugContext} type represents debug formatting state.
 *
 * @internal
 */
type DebugContext = {
  circulars: object[];
  spaces: string;
  stack: object[];
};

/**
 * The {@link debugArray} function formats an array value for debug output.
 *
 * @param value - The array to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
 */
function debugArray(value: readonly unknown[], context: DebugContext): string {
  return debugArrayLike(formatTag(value, "Array"), value, context);
}

/**
 * The {@link debugArrayLike} function formats an array-like object for debug
 * output.
 *
 * @param tag - The display tag for the object.
 *
 * @param value - The array-like object to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugArrayLikeItem} function formats a single element or
 * property of an array-like object.
 *
 * @param key - The property key to format.
 *
 * @param item - The property value to format.
 *
 * @param value - The containing array-like object.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted key-value entry string.
 *
 * @internal
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
 * The {@link debugArrayLikeItems} function formats all own enumerable entries
 * of an array-like object.
 *
 * @param value - The array-like object to inspect.
 *
 * @param context - The active debug formatting context.
 *
 * @returns An array of formatted key-value strings.
 *
 * @internal
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
 * The {@link debugBoolean} function formats a primitive boolean value.
 *
 * @param value - The boolean value to format.
 *
 * @returns The string `"true"` or `"false"`.
 *
 * @internal
 */
function debugBoolean(value: boolean): string {
  return JSON.stringify(value);
}

/**
 * The {@link debugBooleanObject} function formats a boxed `Boolean` wrapper
 * object.
 *
 * @param value - The `Boolean` wrapper object to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugDate} function formats a `Date` instance.
 *
 * @param value - The `Date` instance to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugError} function formats an `Error` instance.
 *
 * @param value - The `Error` instance to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugFunction} function formats a function value.
 *
 * @param value - The function to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugMap} function formats a `Map` instance.
 *
 * @param value - The `Map` instance to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugMapItem} function formats a single `Map` key-value entry.
 *
 * @param key - The entry key.
 *
 * @param value - The entry value.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted `key = value` string.
 *
 * @internal
 */
function debugMapItem(
  key: unknown,
  value: unknown,
  context: DebugContext,
): string {
  return `${debugValue(key, context)} = ${debugValue(value, context)}`;
}

/**
 * The {@link debugMapItems} function formats all entries of a `Map` instance.
 *
 * @param map - The `Map` instance to inspect.
 *
 * @param context - The active debug formatting context.
 *
 * @returns An array of formatted entry strings.
 *
 * @internal
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
 * The {@link debugNumber} function formats a primitive number value.
 *
 * @param value - The number value to format.
 *
 * @returns The formatted numeric string.
 *
 * @internal
 */
function debugNumber(value: number): string {
  return isFinite(value) ? JSON.stringify(value) : String(value);
}

/**
 * The {@link debugNumberObject} function formats a boxed `Number` wrapper
 * object.
 *
 * @param value - The `Number` wrapper object to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugObject} function formats a plain or custom object.
 *
 * @param value - The object to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
 */
function debugObject(value: object, context: DebugContext): string {
  return debugObjectLike(formatTag(value, "Object"), value, "", context);
}

/**
 * The {@link debugObjectKey} function formats an object property key and its
 * associated value.
 *
 * @param key - The property key.
 *
 * @param value - The property value.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted `key: value` string.
 *
 * @internal
 */
function debugObjectKey(
  key: PropertyKey,
  value: unknown,
  context: DebugContext,
): string {
  const keyString = debugValue(key, context);

  return `${isSymbol(key) ? `[${keyString}]` : keyString}: ${debugValue(value, context)}`;
}

/**
 * The {@link debugObjectLike} function formats an object-like value with a
 * tag, optional primitive payload, and own properties.
 *
 * @param tag - The display tag for the object.
 *
 * @param value - The object to format.
 *
 * @param stringValue - The optional inner value description.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugObjectProps} function formats all own enumerable properties
 * of an object.
 *
 * @param value - The object to inspect.
 *
 * @param context - The active debug formatting context.
 *
 * @returns An array of formatted property strings.
 *
 * @internal
 */
function debugObjectProps(value: object, context: DebugContext): string[] {
  return getOwnKeys(value).map((key) =>
    debugObjectKey(key, value[key], context),
  );
}

/**
 * The {@link debugReference} function formats a non-primitive reference value
 * while tracking circular references.
 *
 * @param value - The reference value to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugRegExp} function formats a `RegExp` instance.
 *
 * @param value - The `RegExp` instance to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
 */
function debugRegExp(value: RegExp, context: DebugContext): string {
  return debugObjectLike(
    formatTag(value, "RegExp"),
    value,
    String(value),
    context,
  );
}

/**
 * The {@link debugSet} function formats a `Set` instance.
 *
 * @param value - The `Set` instance to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugSetItems} function formats all values contained in a `Set`
 * instance.
 *
 * @param value - The `Set` instance to inspect.
 *
 * @param context - The active debug formatting context.
 *
 * @returns An array of formatted value strings.
 *
 * @internal
 */
function debugSetItems(value: Set<unknown>, context: DebugContext): string[] {
  return [...value.values()].map((item) =>
    debugValue(item, { ...context, stack: context.stack }),
  );
}

/**
 * The {@link debugString} function formats a primitive string value as a
 * JSON-escaped string literal.
 *
 * @param value - The string value to format.
 *
 * @returns The quoted and escaped string.
 *
 * @internal
 */
function debugString(value: string): string {
  return JSON.stringify(value);
}

/**
 * The {@link debugStringObject} function formats a boxed `String` wrapper
 * object.
 *
 * @param value - The `String` wrapper object to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
function debugStringObject(value: String, context: DebugContext): string {
  return debugArrayLike(formatTag(value, "String"), value, context);
}

/**
 * The {@link debugSymbol} function formats a primitive symbol value.
 *
 * @param value - The symbol value to format.
 *
 * @returns The string representation of `value`.
 *
 * @internal
 */
function debugSymbol(value: symbol): string {
  return value.toString();
}

/**
 * The {@link debugSymbolObject} function formats a boxed `Symbol` wrapper
 * object.
 *
 * @param value - The `Symbol` wrapper object to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
function debugSymbolObject(value: Symbol, context: DebugContext): string {
  return debugObjectLike(debugSymbol(value as symbol), value, "", context);
}

/**
 * The {@link debugTypedArray} function formats a `TypedArray` view.
 *
 * @param value - The typed array view to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
 */
function debugTypedArray(
  value: ArrayLike<unknown>,
  context: DebugContext,
): string {
  return debugArrayLike(formatTag(value, "TypedArray"), value, context);
}

/**
 * The {@link debugValue} function dispatches formatting for any JavaScript
 * value.
 *
 * @param value - The value to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
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
 * The {@link debugWeekMap} function formats a `WeakMap` instance.
 *
 * @param value - The `WeakMap` instance to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
 */
function debugWeekMap(
  value: WeakMap<WeakKey, unknown>,
  context: DebugContext,
): string {
  const props = formatProps(debugObjectProps(value, context), context, "{}");

  return formatObject(
    formatRef(value, context),
    formatTag(value, "WeakMap") + "()",
    props,
  );
}

/**
 * The {@link debugWeekSet} function formats a `WeakSet` instance.
 *
 * @param value - The `WeakSet` instance to format.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The formatted string representation of `value`.
 *
 * @internal
 */
function debugWeekSet(value: WeakSet<object>, context: DebugContext): string {
  const props = formatProps(debugObjectProps(value, context), context, "{}");

  return formatObject(
    formatRef(value, context),
    formatTag(value, "WeakSet") + "()",
    props,
  );
}

/**
 * The {@link formatObject} function joins reference markers, tag names, and
 * formatted property blocks into a single representation.
 *
 * @param ref - The circular reference marker, if any.
 *
 * @param name - The object type tag.
 *
 * @param props - The formatted property block.
 *
 * @returns The combined object representation string.
 *
 * @internal
 */
function formatObject(ref: string, name: string, props: string): string {
  return [
    ...(ref === "" ? [] : [ref]),
    ...(name === "" ? [] : [name]),
    ...(props === "" ? (name === "" ? ["{}"] : []) : [props]),
  ].join(" ");
}

/**
 * The {@link formatProps} function wraps formatted property entries in
 * delimiters with optional multiline indentation.
 *
 * @param props - The formatted property strings.
 *
 * @param context - The active debug formatting context.
 *
 * @param brackets - The opening and closing delimiter pair.
 *
 * @returns The wrapped property block, or an empty string when `props` is
 *   empty.
 *
 * @internal
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
 * The {@link formatRef} function returns a circular reference label for
 * objects recorded in `context.circulars`.
 *
 * @param value - The object to look up.
 *
 * @param context - The active debug formatting context.
 *
 * @returns The `<ref *N>` marker, or an empty string if not circular.
 *
 * @internal
 */
function formatRef(value: object, context: DebugContext): string {
  const ref = context.circulars.findIndex((item) => Object.is(item, value));

  return ref === -1 ? "" : `<ref *${String(ref + 1)}>`;
}

/**
 * The {@link formatTag} function determines the display tag for `value` using
 * `Object.prototype.toString` or constructor name.
 *
 * @param value - The value to inspect.
 *
 * @param defaultTag - The fallback tag when none can be inferred.
 *
 * @returns The resolved tag name.
 *
 * @internal
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
 * @param spaces - The number of space characters to be used as indentation,
 *   clamped to `10` (any number greater than `10` is treated as `10`). Values
 *   less than `1` indicate that no space should be used. Default is `0`.
 *
 * @returns The human-readable debug string representation of `value`.
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
