import { Intl } from "app/Intl";
import { SignInActions, SignInStore, SignInView } from "components/SignIn/index";
import { connect } from "positron-react";

const path = "sign-in";

const actions = new SignInActions();
const store = new SignInStore();

store.listenActions(actions);

export const SignIn = {
    actions,
    component: connect(
        SignInView,
        { data: store, intl: Intl.store },
        { actions, item: {} }
    ),
    path,
    store
};
