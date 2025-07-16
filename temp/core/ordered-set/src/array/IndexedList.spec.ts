import { describe } from "@jest/globals";
import { Spec } from "@positron/spec";

import { ListTests } from "../ListTests";
import { IndexedList } from "./IndexedList";

describe(IndexedList.name, () => {
  const spec = new Spec(
    new ListTests((items?: Iterable<number>) => new IndexedList(items)),
  );

  spec.describe();
});
