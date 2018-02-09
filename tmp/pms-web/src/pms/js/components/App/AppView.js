// @flow

import { AuthModel } from "components/Auth";
import PropTypes from "prop-types";
import * as React from "react";
import type { Router } from "react-router";
import { Component } from "ui/Component";
import { Panel } from "ui/Panel";
import { AppModel } from "./AppModel";

export interface AppViewProps {
    auth: AuthModel,
    authUrl: string,
    data: AppModel,
    children?: React.Node,
    router: Router
}

export class AppView extends Component {
    static get name() {
        return "App";
    }

    static propTypes = {
        auth: PropTypes.instanceOf(AuthModel).isRequired,
        authUrl: PropTypes.string.isRequired,
        data: PropTypes.instanceOf(AppModel).isRequired
    };

    props: AppViewProps;

    checkAuth = (props: AppViewProps) => {
        const { auth, authUrl, router } = props;

        console.log(auth.isGuest, authUrl);

        if (auth.isGuest) {
            router.replace(authUrl);
        }
    };

    componentWillMount() {
        this.checkAuth(this.props);
    }

    componentWillReceiveProps(nextProps: AppViewProps) {
        const { auth } = this.props;

        if (nextProps.auth !== auth) {
            this.checkAuth(nextProps);
        }
    }

    renderHeader() {

    }

    render() {
        const { children } = this.props;

        return (
            <Panel className={ this.block() }>
                { children }
            </Panel>
        );
    }
}
