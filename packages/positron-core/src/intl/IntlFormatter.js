import Intl from "intl";
import cache from "intl-format-cache";
import messageFormat from "intl-messageformat";
import { mapToObject } from "../array";

import { warning } from "../console";
import { InvariableObject, TypedInvariableObject } from "../invariable";
import { valueOf } from "../object";
import { IntlFormats } from "./IntlFormats";

const getDateTimeFormat = cache(Intl.DateTimeFormat);
const getNumberFormat = cache(Intl.NumberFormat);
const getMessageFormat = cache(messageFormat);

const defaults = require("./defaults.json");

function extractParts(parts) {
    return mapToObject(parts, ({ value }) => value, ({ type }) => type === "literal" ? void 0 : type);
}

function getFormatOptions(formatter, type, preset) {
    let format = formatter.formats[type];

    if (format) {
        format = format[preset];

        if (format) {
            format = format.valueOf();
        } else {
            warning("invalid preset");
        }
    } else {
        warning("invalid format type");
    }

    return format;
}

export class IntlFormatter extends InvariableObject {
    constructor(...data) {
        super({ formats: defaults, messages: {} }, ...data);
    }

    getDateFormat(preset) {
        return getDateTimeFormat(this.locale, getFormatOptions(this, "date", preset));
    }

    getMoneyFormat(currency, preset) {
        return getNumberFormat(this.locale, Object.assign({}, getFormatOptions(this, "money", preset), { currency }));
    }

    getNumberFormat(preset) {
        return getNumberFormat(this.locale, getFormatOptions(this, "number", preset));
    }

    formatDate(value, preset = "default") {
        return this.getDateFormat(preset).format(value);
    }

    formatDateToParts(value, preset = "default") {
        return extractParts(this.getDateFormat(preset).formatToParts(value));
    }

    formatMessage(message, opts) {
        const { messages, locale } = this;

        if (messages[locale] === void 0) {
            warning(`no messages for locale '${ locale }'`);
        } else {
            const localeMessages = messages[locale];

            if (localeMessages[message] !== void 0) {
                message = getMessageFormat(localeMessages[message], locale).format(valueOf(opts));
            }
        }

        return message;
    }

    formatMoney(value, currency, preset = "default") {
        return this.getMoneyFormat(currency, preset).format(value);
    }

    formatNumber(value, preset = "default") {
        return this.getNumberFormat(preset).format(value);
    }
}

IntlFormatter.defineInvariableProperties({
    formats: IntlFormats,
    messages: TypedInvariableObject
});
