import { InvariableObject, TypedInvariableObject } from "../invariable";

export class Options extends InvariableObject {
    init(...data) {
        super.init({ localeMatcher: "best fit" }, ...data);
    }
}

export class DateTimeOptions extends Options {
    init(...data) {
        super.init({ formatMatcher: "best fit" }, ...data);
    }
}

export class NumberOptions extends Options {
    init(...data) {
        super.init({ useGrouping: true }, ...data);
    }
}

export class MoneyOptions extends NumberOptions {
    init(...data) {
        super.init({ style: "currency", currencyDisplay: "symbol" }, ...data);
    }
}

class DateTimeFormats extends TypedInvariableObject.of(DateTimeOptions) {
}

export class IntlFormats extends InvariableObject {
}

IntlFormats.defineInvariableProperties({
    date: DateTimeFormats,
    time: DateTimeFormats,
    number: NumberOptions,
    money: MoneyOptions
});
