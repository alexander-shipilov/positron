import { IntlFormat } from "./IntlFormat";

export class IntlFormatNumber extends IntlFormat {
    constructor(...data) {
        super({ useGrouping: true }, ...data);
    }
}
