import { Store } from "../dataflow/Store";
import { IntlFormatter } from "./IntlFormatter";

export class IntlStore extends Store.of(IntlFormatter) {
    setLocale(locale) {
        return this.setState({ locale });
    }

    setMessages(messages) {
        return this.setState({ messages: this.state.messages.assign(messages) });
    }

    setLocaleMessages(locale, messages) {
        return this.setMessages({ [locale]: messages });
    }
}
