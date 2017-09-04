import { InvariableObject, TypedInvariableObject } from "../invariable";

export class Options extends InvariableObject {
    constructor(...data) {
        super({ localeMatcher: "best fit" }, ...data);
    }
}

export class DateTimeOptions extends Options {
    constructor(...data) {
        super({ formatMatcher: "best fit" }, ...data);
    }
}

export class NumberOptions extends Options {
    constructor(...data) {
        super({ useGrouping: true }, ...data);
    }
}

export class MoneyOptions extends NumberOptions {
    constructor(...data) {
        super({ style: "currency", currencyDisplay: "symbol" }, ...data);
    }
}

export class IntlFormats extends InvariableObject {
}

IntlFormats.defineInvariableProperties({
    date: TypedInvariableObject.of(DateTimeOptions),
    money: TypedInvariableObject.of(MoneyOptions),
    number: TypedInvariableObject.of(NumberOptions)
});
