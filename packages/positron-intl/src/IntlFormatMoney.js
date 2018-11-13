import { IntlFormatNumber } from "./IntlFormatNumber";

export class IntlFormatMoney extends IntlFormatNumber {
  constructor(...data) {
    super({ style: "currency", currencyDisplay: "symbol" }, ...data);
  }
}
