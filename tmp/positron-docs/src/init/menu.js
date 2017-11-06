import { AppMenuActions, AppMenuStore } from "../store/AppMenu";
import routes from "./routes";

const actions = new AppMenuActions();
const store = new AppMenuStore(routes).listenAll(actions);

export const menu = { actions, store };
