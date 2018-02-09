import { ForgotView, ForgotActions, ForgotStore } from "components/Forgot/index";
import { Intl } from "app/Intl";
import { connect } from "positron-react";

export const path = "forgot";

export const actions = new ForgotActions();
export const store = new ForgotStore();
export const component = connect(ForgotView, { data: store, intl: Intl.store }, { actions, item: {} });

store.listenActions(actions);
