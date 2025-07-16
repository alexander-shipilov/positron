import { describe } from "@jest/globals";
import { Spec } from "@positron/spec";

import { ListTests } from "../ListTests";
import { ArrayList } from "./ArrayList";

describe(ArrayList.name, () => {
  const spec = new Spec(
    new ListTests((items?: Iterable<number>) => new ArrayList(items)),
  );

  spec.describe();
});
