import { Intl } from "app/Intl";
import { AuthActions, AuthStore, AuthView } from "components/Auth";
import { connect } from "positron-react";

const path = "auth";

const actions = new AuthActions();
const store = new AuthStore({ user: { id: 1 } });
const component = connect(AuthView, { auth: store, intl: Intl.store }, { actions });

store.listenActions(actions);

export const Auth = {
    actions,
    component,
    store,
    path
};
