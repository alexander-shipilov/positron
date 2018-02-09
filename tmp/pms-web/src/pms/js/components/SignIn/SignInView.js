import React from "react";
import { Link } from "react-router";
import { AuthPage } from "ui/AuthPage";
import { Component } from "ui/Component";
import { FormField } from "ui/FormField";
import { TextField } from "ui/TextField";
import { Password } from "ui/Password";
import { FormView } from "ui/FormView";

export class SignInView extends Component {
    static get name() {
        return "SignIn";
    }

    static messages = require("./messages");

    onSubmit = () => {
        const { actions } = this.props;

        actions.submit.trigger();
    };

    renderFooter() {
        return (
            <p className={ this.element("footer") }>
                { this.formatMessage("no-account") }

                <Link to="/client/start" className={ this.element("start") }>
                    { this.formatMessage("start") }
                </Link>

                <Link to="/developer/join" className={ this.element("join") }>
                    { this.formatMessage("join") }
                </Link>
            </p>
        );
    }

    render() {
        return (
            <AuthPage title={ this.formatMessage("title") }
                footer={ this.renderFooter() } className={ this.block() }>

                <FormView { ...FormView.filterProps(this.props) } cancel={ false } className="account-form"
                    onSubmit={ this.onSubmit }>
                    <FormField label={ this.formatMessage("username") }>
                        <TextField name="username" type="text" tabIndex={ 1 } />
                    </FormField>

                    <FormField label={ this.formatMessage("password") }>
                        <Password name="password" tabIndex={ 2 } />
                    </FormField>

                    <div className="form-group clearfix">
                        <div className="pull-left">
                            <label className="checkbox-inline">
                                <input type="checkbox" className="" value="" tabIndex="3" />
                                <small>Remember me</small>
                            </label>
                        </div>

                        <div className="pull-right">
                            <small><Link to="/auth/forgot">Forgot Password?</Link></small>
                        </div>
                    </div>
                </FormView>
            </AuthPage>
        );
    }
}
