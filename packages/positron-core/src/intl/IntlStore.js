import { Store } from "../dataflow/Store";
import { IntlFormatter } from "./IntlFormatter";
import { mapKeys } from "../object";

export class IntlStore extends Store.of(IntlFormatter) {
    setLocale(locale) {
        this.setState({ locale });
    }

    setMessages(messages, prefix = "") {
        this.setState({ messages: prefix === "" ? messages : mapKeys(messages, (value, key) => prefix + key) });
    }
}
