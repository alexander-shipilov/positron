import React from "react";
import { AppPage } from "ui/AppPage";
import { Component } from "ui/Component";

export class AuthPage extends Component {
    static get name() {
        return "AuthPage";
    }

    render() {
        const { children, footer } = this.props;

        return (
            <AppPage className={ this.block() }>
                { children }
                { footer ? <div className="account-footer">{ footer }</div> : null }
            </AppPage>
        );
    }
}
