import { Component } from "positron-core/src/react";
import React from "react";
import { hashHistory, IndexRedirect, Route, Router } from "react-router";
import { intl, menu, settings } from "./init";
import { App } from "./ui/App/App";
import { connect } from "positron-core/src/dataflow";

const AppView = connect(
    App,
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
    render() {
        const { routes } = this.props;

        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ AppView }>
                    <IndexRedirect to="en-US" />
                    <Route path=":locale">
                        { this.renderRoutes(routes) }
                    </Route>
                </Route>
            </Router>
        );
    }

    renderRoute(route, index) {
        const { path, component } = route;

        return (
            <Route key={ index } { ...{ path, component } }>
                { this.renderRoutes(route.entries) }
            </Route>
        );
    }

    renderRoutes(routes) {
        return routes && routes.length
            ? [<IndexRedirect key="index" to={ routes[0].path } />, ...routes.map(this.renderRoute, this)]
            : null;
    }
}

export default connect(AppRoutes, { routes: menu.store });
