import {
  isArray,
  isArrayLike,
  isBoolean,
  isFunction,
  isNullLike,
  isNumber,
  isString,
  isSymbol,
  propertyKeys,
  typeOf,
} from "@positron/core";

type DebugContext = {
  circulars: object[];
  stack: object[];
  tab: string;
};

/**
 * @param value -
 * @param context -
 */
function debugArray(value: readonly unknown[], context: DebugContext): string {
  return debugArrayLike(tagOf(value, "Array"), value, context);
}

/**
 * @param tag -
 * @param value -
 * @param context -
 */
function debugArrayLike(
  tag: string,
  value: ArrayLike<unknown>,
  context: DebugContext,
): string {
  const props = indentProps(debugArrayLikeItems(value, context), context, "[]");
  const ref = reference(value, context);

  return [
    ...(ref === "" ? [] : [ref]),
    tag + "(" + String(value.length) + ")",
    ...(props === "" ? [] : [props]),
  ].join(" ");
}

/**
 * @param key -
 * @param item -
 * @param value -
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

  return debugProp(isIndex ? index : key, item, context);
}

/**
 * @param value -
 * @param context -
 */
function debugArrayLikeItems(
  value: ArrayLike<unknown>,
  context: DebugContext,
): string[] {
  return propertyKeys(value).map((key) =>
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
 * @param context -
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
function debugBooleanObject(value: Boolean, context: DebugContext): string {
  return debugObjectLike(
    tagOf(value, "Boolean"),
    value,
    String(value),
    context,
  );
}

/**
 * @param value -
 * @param context -
 */
function debugDate(value: Date, context: DebugContext): string {
  return debugObjectLike(
    tagOf(value, "Date"),
    value,
    value.toUTCString(),
    context,
  );
}

/**
 * @param value -
 * @param context -
 */
function debugError(value: Error, context: DebugContext): string {
  return debugObjectLike(
    tagOf(value, "Error"),
    value,
    JSON.stringify(value.message),
    context,
  );
}

/**
 * @param value -
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
 * @param context -
 */
function debugMap(value: Map<unknown, unknown>, context: DebugContext): string {
  const props = indentProps(
    [...debugMapItems(value, context), ...debugProps(value, context)],
    context,
    "{}",
  );
  const ref = reference(value, context);

  return [
    ...(ref === "" ? [] : [ref]),
    tagOf(value, "Map") + "(" + String(value.size) + ")",
    ...(props === "" ? [] : [props]),
  ].join(" ");
}

/**
 * @param key -
 * @param value -
 * @param context -
 */
function debugMapItem(
  key: unknown,
  value: unknown,
  context: DebugContext,
): string {
  return `${debugValue(key, context)} → ${debugValue(value, context)}`;
}

/**
 * @param map -
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
 * @param context -
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
function debugNumberObject(value: Number, context: DebugContext): string {
  return debugObjectLike(
    tagOf(value, "Number"),
    value,
    debugNumber(Number(value)),
    context,
  );
}

/**
 * @param value -
 * @param context -
 */
function debugObject(value: object, context: DebugContext): string {
  return debugObjectLike(tagOf(value, "Object"), value, "", context);
}

/**
 * @param tag -
 * @param value -
 * @param stringValue -
 * @param context -
 */
function debugObjectLike(
  tag: string,
  value: object,
  stringValue: string = "",
  context: DebugContext,
): string {
  const props = indentProps(debugProps(value, context), context, "{}");
  const ref = reference(value, context);

  const name = [
    ...(tag === "" || tag === "Object" ? [] : [tag]),
    ...(stringValue === "" ? [] : [`(${stringValue})`]),
  ].join("");

  return [
    ...(ref === "" ? [] : [ref]),
    ...(name === "" ? [] : [name]),
    ...(props === "" ? (name === "" ? ["{}"] : []) : [props]),
  ].join(" ");
}

/**
 * @param key -
 * @param value -
 * @param context -
 */
function debugProp(key: PropertyKey, value: unknown, context: DebugContext) {
  const keyString = debugValue(key, context);

  return `${isSymbol(key) ? `[${keyString}]` : keyString}: ${debugValue(value, context)}`;
}

/**
 * @param value -
 * @param context -
 */
function debugProps(value: object, context: DebugContext): string[] {
  return propertyKeys(value).map((key) => debugProp(key, value[key], context));
}

/**
 * @param value -
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

      case value instanceof Set:
        return debugSet(value, nextContext);

      case value instanceof WeakMap:
        return debugWeekMap(value, nextContext);

      case value instanceof WeakSet:
        return debugWeekSet(value, nextContext);

      default:
        return debugObject(value, nextContext);
    }
  }

  if (circulars.findIndex((item) => Object.is(item, value)) === -1) {
    circulars.push(value);
  }

  return `#circular${reference(value, context)}`;
}

/**
 * @param value -
 * @param context -
 */
function debugRegExp(value: RegExp, context: DebugContext) {
  return debugObjectLike(tagOf(value, "RegExp"), value, String(value), context);
}

/**
 * @param value -
 * @param context -
 */
function debugSet(value: Set<unknown>, context: DebugContext): string {
  const props = indentProps(
    [...debugSetItems(value, context), ...debugProps(value, context)],
    context,
    "{}",
  );
  const ref = reference(value, context);

  return [
    ...(ref === "" ? [] : [ref]),
    tagOf(value, "Set") + "(" + String(value.size) + ")",
    ...(props === "" ? [] : [props]),
  ].join(" ");
}

/**
 * @param value -
 * @param context
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
 * @param context -
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
function debugStringObject(value: String, context: DebugContext): string {
  return debugArrayLike(tagOf(value, "String"), value, context);
}

/**
 * @param value -
 */
function debugSymbol(value: symbol): string {
  return value.toString();
}

/**
 * @param value -
 * @param context -
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
function debugSymbolObject(value: Symbol, context: DebugContext): string {
  // @ts-expect-error Symbol expected
  return debugObjectLike(debugSymbol(value), value, "", context);
}

/**
 * @param value -
 * @param context -
 */
function debugTypedArray(
  value: ArrayLike<unknown>,
  context: DebugContext,
): string {
  return debugArrayLike(tagOf(value, "TypedArray"), value, context);
}

/**
 * @param value -
 * @param context -
 */
function debugValue(value: unknown, context: DebugContext): string {
  switch (true) {
    case isNullLike(value):
      return typeOf(value);

    case isBoolean(value):
      return debugBoolean(value);

    case isString(value):
      return debugString(value);

    case isNumber(value):
      return debugNumber(value);

    case isSymbol(value):
      return debugSymbol(value);

    default:
      return debugReference(value, context);
  }
}

/**
 * @param value -
 * @param context -
 */
function debugWeekMap(value: WeakMap<object, unknown>, context: DebugContext) {
  return (
    `${tagOf(value, "WeakMap")} ` +
    `{${["...", ...debugProps(value, context)].join(", ")}}`
  );
}

/**
 * @param value -
 * @param context -
 */
function debugWeekSet(value: WeakSet<object>, context: DebugContext) {
  return (
    `${tagOf(value, "WeakSet")} ` +
    `{${["...", ...debugProps(value, context)].join(", ")}}`
  );
}

function indent(tab: string, length: number): string {
  return Array.from({ length: length + 1 }).join(tab);
}

/**
 * @param props -
 * @param context -
 * @param brackets -
 */
function indentProps(
  props: string[],
  context: DebugContext,
  brackets: string,
): string {
  const { stack, tab } = context;
  const { length: depth } = stack;

  return props.length === 0
    ? ""
    : tab === ""
      ? brackets[0] +
        props.map((prop) => indent(tab, depth) + prop).join(", ") +
        brackets[1]
      : brackets[0] +
        `\n${props.map((prop) => indent(tab, depth) + prop).join(",\n")}` +
        `\n${indent(tab, depth - 1)}` +
        brackets[1];
}

/**
 * @param value -
 * @param context
 */
function reference(value: object, context: DebugContext): string {
  const ref = context.circulars.findIndex((item) => Object.is(item, value));

  return ref === -1 ? "" : `<ref *${String(ref + 1)}>`;
}

/**
 * @param value -
 * @param defaultTag -
 */
function tagOf(value: unknown, defaultTag: string): string {
  return value?.constructor?.name || `<${defaultTag}>`;
}

/**
 * @param value -
 * @param indent -
 *
 * @public
 */
export function debug(value: unknown, indent: number = 0): string {
  return debugValue(value, {
    circulars: [],
    stack: [],
    tab: "".padStart(indent, " "),
  });
}
