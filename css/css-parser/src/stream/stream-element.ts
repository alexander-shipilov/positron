import type { Primitive } from "@positron/lang";

/**
 * The {@link StreamElement} type represents a valid stream element, which can
 * be any non-nullish value (primitives excluding `null` and `undefined`, as
 * well as objects).
 *
 * @remarks
 *
 *   - `null` is disallowed because it is reserved as the end-of-stream
 *      sentinel returned by {@link Stream.consume}.
 *
 *   - `undefined` is intentionally disallowed as well to ensure that loose
 *      equality checks (`element == null`) safely and reliably detect the end
 *      of the stream without false positives on valid elements.
 *
 * @public
 */
export type StreamElement = object | NonNullable<Primitive>;
