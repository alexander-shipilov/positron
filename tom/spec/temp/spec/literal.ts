import type { StringLike } from "@positron/lang";

import type { SpecRef } from "./spec-ref";
import { SpecToken } from "./spec-token";

type Literal =
  | Record<PropertyKey & StringLike, StringLike>
  | StringLike
  | StringLike[];

/**
 * @param parts -
 * @param values -
 */
export function literal(
  parts: TemplateStringsArray,
  ...values: readonly unknown[]
): (SpecRef | SpecToken | string)[] {
  return values.reduce<(SpecRef | SpecToken | string)[]>(
    (tokens, token, index) => [
      ...tokens,
      SpecToken.from(token),
      parts[index + 1] ?? "",
    ],
    [parts[0]],
  );
}
