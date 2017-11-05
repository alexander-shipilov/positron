import { ImmutableObject, TypedImmutableObject } from "positron-immutable";

export class Options extends ImmutableObject {
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

export class IntlFormats extends ImmutableObject {
}

IntlFormats.of({
    date: TypedImmutableObject.of(DateTimeOptions),
    money: TypedImmutableObject.of(MoneyOptions),
    number: TypedImmutableObject.of(NumberOptions)
});
