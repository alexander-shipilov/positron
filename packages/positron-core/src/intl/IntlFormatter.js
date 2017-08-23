import Intl from "intl";
import cache from "intl-format-cache";
import messageFormat from "intl-messageformat";
import { InvariableObject } from "../invariable";
import { nvl, valueOf } from "../object";
import { IntlDefaults } from "./IntlDefaults";
import { IntlFormats } from "./IntlFormats";

const getDateTimeFormat = cache(Intl.DateTimeFormat);
const getNumberFormat = cache(Intl.NumberFormat);
const getMessageFormat = cache(messageFormat);

export class IntlFormatter extends InvariableObject {
    init(...data) {
        super.init({ formats: IntlDefaults, messages: {} }, ...data);
    }

    format(type, preset) {
        let format = this.formats[type];

        if (!format) {
            throw this.getError("invalid format type");
        }

        if (preset) {
            format = format[preset];
            if (!format) {
                throw this.getError(`invalid format ${ type } preset`);
            }
        }

        return format.valueOf();
    }

    formatDate(value, preset = "short") {
        return getDateTimeFormat(this.locale, this.format("date", preset)).format(value);
    }

    formatMessage(messageId, opts) {
        const { messages, locale } = this;
        let message = messages[messageId];

        if (message !== void 0) {
            if (message[locale] === void 0) {
                throw this.getError(`message ${ message } has no locale ${ locale }`);
            }

            message = getMessageFormat(message[locale], locale).format(valueOf(opts));
        }

        return nvl(message, messageId);
    }

    formatMoney(value, currency) {
        return getNumberFormat(this.locale, Object.assign(this.format("money"), { currency: currency })).format(value);
    }

    formatNumber(value) {
        return getNumberFormat(this.locale, this.format("number")).format(value);
    }

    formatTime(value, preset = "short") {
        return getDateTimeFormat(this.locale, this.format("time", preset)).format(value);
    }

    valueOf() {
        return Object.assign(super.valueOf(), {
            formats: this.formats,
            messages: this.messages
        });
    }
}

IntlFormatter.defineInvariableProperties({
    formats: IntlFormats,
    messages: InvariableObject
});
