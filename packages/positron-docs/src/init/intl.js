import { IntlActions, IntlStore } from "positron-core/intl";

const actions = new IntlActions();
const store = new IntlStore({ locale: "en-US" }).listenAll(actions);

export const intl = { actions, store };
