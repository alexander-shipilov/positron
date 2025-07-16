import { describe } from "@jest/globals";
import { TreeListImpl, TreeListSpec } from "src/list";

describe("TreeListImpl", () => {
  const list = new TreeListImpl();

  list.append({}).append({});

  TreeListSpec.describe(list, "list");
});
