import { Intl } from "app/Intl";
import { AppActions, AppStore, AppView } from "components/App";
import { connect } from "positron-react";
import { Auth } from "./Auth";

const actions = new AppActions();
const store = new AppStore({});

store.listenActions(actions);

export const App = {
    actions,
    component: connect(
        AppView,
        { auth: Auth.store, data: store, intl: Intl.store },
        { actions, authUrl: "/" + Auth.path }
    ),
    store
};
