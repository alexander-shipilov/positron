import "babel-polyfill";

import { NotFound } from "components/NotFound";
import React from "react";
import ReactDOM from "react-dom";
import { hashHistory, IndexRedirect, Route, Router } from "react-router";

import { App, Auth, SignIn } from "./app/index";

ReactDOM.render((
    <Router history={ hashHistory }>
        <Route path="/" component={ App.component }>
            <Route path={ Auth.path } component={ Auth.component }>
                <IndexRedirect to={ SignIn.path } />
                <Route path={ SignIn.path } component={ SignIn.component } />
            </Route>
            <Route path="*" component={ NotFound } />
        </Route>
    </Router>
), document.getElementById("app"));
