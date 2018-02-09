import React from "react";
import { Component } from "ui/Component";
import { CheckBox } from "ui/CheckBox";
import { FormField } from "ui/FormField";
import { Password } from "ui/Password";
import { Phone } from "ui/Phone";
import { TextField } from "ui/TextField";
import { FormView } from "ui/FormView";
import { Panel } from "ui/Panel";

export class SignUpView extends Component {
    static get name() {
        return "SignUp";
    }

    static messages = require("./messages");

    onSubmit = () => {
        const { actions } = this.props;

        actions.validate.trigger();
    };

    render() {
        const { data: { item }, disabled } = this.props;

        return (
            <Panel title={ this.formatMessage("title") } className={ this.block() }>
                <FormView { ...FormView.filterProps(this.props, { className: false }) } cancel={ false }
                    disabled={ disabled || !item || !item.Accept }
                    onSubmit={ this.onSubmit }>

                    <FormField label={ this.formatMessage("name") }>
                        <div className="row">
                            <div className="col-sm-6">
                                <TextField name="FirstName" placeholder={ this.formatMessage("first-name") }
                                    tabIndex={ 1 } className={ this.element("first-name") } />
                            </div>
                            <div className="col-sm-6">
                                <TextField name="LastName" placeholder={ this.formatMessage("last-name") }
                                    tabIndex={ 2 } />
                            </div>
                        </div>
                    </FormField>

                    <FormField label={ this.formatMessage("email") }>
                        <TextField name="Email" type="text" tabIndex={ 3 }
                            placeholder={ this.formatMessage("email-placeholder") } feedback="envelope"
                            feedbackLeft={ true } />
                    </FormField>

                    <FormField label={ this.formatMessage("phone") }>
                        <Phone name="PhoneNumber" type="text" tabIndex={ 4 } />
                    </FormField>

                    <FormField label={ this.formatMessage("user-name") }>
                        <TextField name="UserName" type="text" tabIndex={ 5 } />
                    </FormField>

                    <FormField label={ this.formatMessage("password") }>
                        <div className="row">
                            <div className="col-sm-6">
                                <Password name="Password" tabIndex={ 6 } className={ this.element("password") } />
                            </div>
                            <div className="col-sm-6">
                                <Password name="ConfirmPassword"
                                    placeholder={ this.formatMessage("confirm-password") }
                                    tabIndex={ 7 } canBeVisible={ false }
                                    className={ this.element("confirm-password") } />
                            </div>
                        </div>
                    </FormField>

                    <FormField>
                        <CheckBox name="Accept" tabIndex={ 8 }>
                            { this.formatMessage("accept") }
                        </CheckBox>
                    </FormField>

                </FormView>
            </Panel>
        );
    }
}
