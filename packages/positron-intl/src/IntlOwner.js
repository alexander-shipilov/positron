// @flow

import { toKebabCase, warning } from "positron-core";
import { IntlFormatter } from "./IntlFormatter";

function getIntl(target: IntlOwner): IntlFormatter {
    const { intl } = target;

    if (!intl) {
        warning(target + ": requires intl");
    }

    return intl;
}

function toDate(date: any): Date {
    return date instanceof Date ? date : new Date(date);
}

export class IntlOwner {
    intl: IntlFormatter;

    formatDate(date: any, preset: string = "default"): string {
        const intl = getIntl(this);
        const dateObject = toDate(date);
        const isValidDate = !isNaN(dateObject);

        if (!isValidDate) {
            warning(this + "#formatDate: invalid date");
        }

        return intl && isValidDate ? intl.formatDate(date, preset) : String(date);
    }

    formatDateToParts(date: any, preset = "default"): Object {
        const intl = getIntl(this);
        const dateObject = toDate(date);
        const isValidDate = !isNaN(dateObject);

        if (!isValidDate) {
            warning(this + "#formatDateToParts: invalid date");
        }

        return intl && isValidDate(date) ? intl.formatDateToParts(date, preset) : {};
    }

    formatMessage(message, params) {
        const intl = getIntl(this);

        message = toKebabCase(this.constructor.name + (message ? "-" + message : ""));

        if (intl) {
            message = intl.formatMessage(message, params);
        }

        return message;
    }

    formatMoney(value, currency, preset = "default") {
        const intl = getIntl(this);

        return intl ? intl.formatMoney(value, currency, preset) : String(value);
    }

    formatNumber(value, preset = "default") {
        const intl = getIntl(this);

        return intl ? intl.formatNumber(value, preset) : String(value);
    }
}
