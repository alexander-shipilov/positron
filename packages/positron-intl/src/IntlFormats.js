import { ImmutableObject, TypedImmutableObject } from "positron-immutable";
import { IntlFormatDateTime } from "./IntlFormatDateTime";
import { IntlFormatMoney } from "./IntlFormatMoney";
import { IntlFormatNumber } from "./IntlFormatNumber";

export class IntlFormats extends ImmutableObject {
}

IntlFormats.of({
    date: TypedImmutableObject.of(IntlFormatDateTime),
    money: TypedImmutableObject.of(IntlFormatMoney),
    number: TypedImmutableObject.of(IntlFormatNumber)
});
