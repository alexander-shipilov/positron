import { AppSettingsStore, AppSettingsActions } from "../store/AppSettings";

const actions = new AppSettingsActions();
const store = new AppSettingsStore({ accent: "blue" }).listenAll(actions);

export const settings = { actions, store };
