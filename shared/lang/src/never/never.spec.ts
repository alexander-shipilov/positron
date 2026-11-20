import { describe } from "@jest/globals";

import { neverLikeTests } from "../-tests/never-like-tests";

import { never, NEVER_MESSAGE } from "./never";
import { NeverException } from "./never-exception";

describe(`function ${never.name}(...errorParams)`, () => {
  neverLikeTests(never, NEVER_MESSAGE, NeverException);
});
