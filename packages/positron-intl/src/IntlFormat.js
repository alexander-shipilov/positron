import { ImmutableObject } from "positron-immutable";

export class IntlFormat extends ImmutableObject {
  constructor(...data) {
    super({ localeMatcher: "best fit" }, ...data);
  }
}
