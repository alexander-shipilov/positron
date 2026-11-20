import { describe, expect, it } from "@jest/globals";

import { Spec } from "@positron/tom-spec";

import { TomAvlNode } from "./tom-avl-node";
import { TomAvlNodeTests } from "./tom-avl-node-tests";

describe("TomAvlNode<TValue>", () => {
  new Spec({ describe, expect, it }).describe(
    new TomAvlNodeTests(),
    (value: unknown) => new TomAvlNode(value),
  );
});
