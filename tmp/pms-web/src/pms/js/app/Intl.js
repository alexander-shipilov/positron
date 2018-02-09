import { ForgotView } from "components/Forgot";
import { SignInView } from "components/SignIn";
import { SignUpView } from "components/SignUp";
import { compact, forEach, mapKeys } from "positron-core";
import { IntlActions, IntlStore } from "positron-intl";
import { GenericForm } from "ui/GenericForm";

const messages = {};

function addComponents(...components) {
    components.forEach((component) => {
        const { messages: componentMessages, className } = component;

        forEach(componentMessages, ((localeMessages, locale) => {
            messages[locale] = compact(messages[locale],
                mapKeys(localeMessages, (value, key) => className + "-" + key));
        }));
    });
}

addComponents(
    GenericForm,
    ForgotView,
    SignInView,
    SignUpView
);

const actions = new IntlActions();
const store = new IntlStore({ locale: "en-US", messages });

export const Intl = { actions, store };
