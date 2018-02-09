// @flow

import { compact } from "positron-core";
import { IntlFormatter } from "positron-intl";
import PropTypes from "prop-types";
import * as React from "react";
import type { Router } from "react-router";
import type { ComponentProps } from "ui/Component";
import { Component } from "ui/Component";
import { Select } from "ui/Select";
import { AuthModel } from "./AuthModel";

export interface AuthViewProps extends ComponentProps {
    auth: AuthModel,
    children?: React.Node,
    intl: IntlFormatter,
    params: { retUrl?: string },
    router: Router
}

const LOCALES = {
    "ru-RU": "Русский",
    "en-US": "English"
};

export class AuthView extends Component {
    static get name() {
        return "Auth";
    }

    static propTypes = compact(
        Component.propTypes,
        {
            auth: PropTypes.instanceOf(AuthModel).isRequired,
            intl: PropTypes.instanceOf(IntlFormatter).isRequired
        }
    );

    props: AuthViewProps;

    checkAuth = (props: AuthViewProps) => {
        const { auth, params: { retUrl }, router } = props;

        if (!auth.isGuest) {
            router.replace(retUrl || "/");
        }
    };

    onLocaleChange = (value) => {
        console.log(value);
    };

    componentWillMount() {
        this.checkAuth(this.props);
    }

    componentWillReceiveProps(nextProps: AuthViewProps) {
        const { auth } = this.props;

        if (nextProps.auth !== auth) {
            this.checkAuth(nextProps);
        }
    }

    renderLocales() {
        const { intl } = this.props;

        return (
            <Select options={ LOCALES } value={ intl.locale } className={ this.element("locale") }
                onChange={ this.onLocaleChange } />
        );
    }

    renderTheme() {

    }

    render() {
        return (
            <main className={ this.block() }>
                <div className={ this.element("content") }>
                    { this.props.children }
                </div>
                { this.renderLocales() }
                <div className={ this.element("logo") } />
            </main>
        );
    }
}
