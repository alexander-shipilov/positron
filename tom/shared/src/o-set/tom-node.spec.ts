import { describe, expect, it } from "@jest/globals";

import { Spec } from "@positron/tom-spec";

import { TomNode } from "./tom-node";
import TomNodeTests from "./tom-node-tests";

describe("TomNode", () => {
  new Spec({ describe, expect, it }).describe(
    new TomNodeTests(),
    (value: unknown) => new TomNode(value),
  );
});
