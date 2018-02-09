import React from "react";
import { Link } from "react-router";
import { AuthPage } from "ui/AuthPage";
import { Component } from "ui/Component";
import { FormField } from "ui/FormField";
import { TextField } from "ui/TextField";
import { FormView } from "ui/FormView";

export class ForgotView extends Component {
    static get name() {
        return "Forgot";
    }

    static messages = require("./messages");

    render() {
        return (
            <AuthPage title={ this.formatMessage("title") }
                className={ this.block() }>
                <h5>{ this.formatMessage("title") }</h5>

                <FormView { ...FormView.filterProps(this.props) } cancel={ false } className="account-form">

                    <FormField label={ this.formatMessage("email") }>
                        <TextField name="email" type="email" tabIndex={ 1 } />
                    </FormField>

                    <div className="form-group">
                        <Link to="/auth/login">
                            <i className="fa fa-angle-double-left" /> {this.formatMessage("back")}
                        </Link>
                    </div>
                </FormView>
            </AuthPage>
        );
    }
}
