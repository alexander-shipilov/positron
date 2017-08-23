import { AppMenuActions, AppMenuStore } from "../store/AppMenu";
import pages from "./pages";

const actions = new AppMenuActions();
const store = new AppMenuStore(pages).listenAll(actions);

export const menu = { actions, store };
