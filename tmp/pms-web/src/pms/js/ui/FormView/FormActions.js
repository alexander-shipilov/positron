import PropTypes from "prop-types";
import { Action } from "positron-flow";
import { ViewActions } from "ui/View";

export class FormActions extends ViewActions {
    constructor() {
        super();

        Object.assign(this, {
            setFieldValue: new Action(PropTypes.string.isRequired, PropTypes.any),
            setFieldError: new Action(PropTypes.string.isRequired, PropTypes.any),
            setFieldErrors: new Action(PropTypes.objectOf(PropTypes.string)),

            validate: new Action(),

            submit: new Action(),
            submitError: new Action(),
            submitSuccess: new Action()
        });
    }
}
