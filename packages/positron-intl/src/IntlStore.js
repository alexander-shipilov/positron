import { Store } from "positron-flow";
import { TypedImmutableObject } from "positron-immutable";
import { IntlFormatter } from "./IntlFormatter";

export class IntlStore extends Store.of(IntlFormatter) {
    setLocale(locale) {
        return this.setState({ locale });
    }

    setMessages(messages) {
        const { state } = this;

        return this.setState({ messages: TypedImmutableObject.assign(state && state.messages, messages) });
    }

    setLocaleMessages(locale, messages) {
        return this.setMessages({ [locale]: messages });
    }
}
