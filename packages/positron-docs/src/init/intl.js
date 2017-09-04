import { IntlActions, IntlStore } from "positron-core/src/intl";
import { InstallationMessages } from "../pages/Installation";

const actions = new IntlActions();
const store = new IntlStore({ locale: "en-US", messages: { "en-US": {}, "ru-RU": {} } }).listenAll(actions);


export const intl = { actions, store };

