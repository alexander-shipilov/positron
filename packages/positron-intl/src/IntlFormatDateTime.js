import { IntlFormat } from "./IntlFormat";

export class IntlFormatDateTime extends IntlFormat {
  constructor(...data) {
    super({ formatMatcher: "best fit" }, ...data);
  }
}
