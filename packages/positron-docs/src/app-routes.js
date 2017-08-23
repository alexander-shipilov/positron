import { Component } from "positron-core/react";
import React from "react";
import { hashHistory, IndexRedirect, Route, Router } from "react-router";
import { intl, menu, settings } from "./init";
import { App } from "./ui/App/App";

const AppView = App.connect(
    {
        intl: intl.store,
        menu: menu.store,
        settings: settings.store
    },
    {
        intlActions: intl.actions,
        menuActions: menu.actions,
        settingsActions: settings.actions
    }
);

class AppRoutes extends Component {
    renderRoute(item, index) {
        const { ref, component } = item;

        return (
            <Route key={ index } path={ ref } { ...{ component } }>
                { this.renderRoutes(item.entries) }
            </Route>
        );
    }

    renderRoutes(items) {
        return items && items.length
            ? [<IndexRedirect key="index" to={ items[0].ref } />, ...items.map(this.renderRoute, this)]
            : null;
    }

    render() {
        const { items } = this.props;

        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ AppView }>
                    <IndexRedirect to="en-US" />
                    <Route path=":locale">
                        { this.renderRoutes(items) }
                    </Route>
                </Route>
            </Router>
        );
    }
}

export default AppRoutes.connect({ items: menu.store });
