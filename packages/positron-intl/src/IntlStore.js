import { ImmutableStore } from "positron-immutable";
import { IntlFormatter } from "./IntlFormatter";

export class IntlStore extends ImmutableStore.of(IntlFormatter) {
  setLocale(locale) {
    return this.setState({ locale });
  }

  setMessages(messages) {
    const { state } = this;

    return this.setState({ messages: IntlFormatter.types.messages.assign(state && state.messages, messages) });
  }

  setLocaleMessages(locale, messages) {
    return this.setMessages({ [locale]: messages });
  }
}
