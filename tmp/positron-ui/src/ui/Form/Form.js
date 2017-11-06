import { Component } from "/Component";
import { DropOwner } from "/Drop";
import { findDOMNode } from "react-dom";

import "./Form.scss";
import { FormPropTypes } from "./FormPropTypes";
import { FormRenderer } from "./FormRenderer";

export class Form extends Component.implement(DropOwner) {
    onSubmit = (event) => {
        const { busy, onSubmit } = this.props;

        event.preventDefault();
        if (!busy && onSubmit) {
            onSubmit(event);
        }
    };

    constructor(...args) {
        super(...args);
        this.initDrop();

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps({ error: nextError }) {
        const { error: currError } = this.props;

        if (nextError) {
            this.showError(nextError);
        } else if (currError) {
            this.hideError();
        }
    }

    getFieldComponent(field) {
        const { refs } = this;

        return field && refs && refs.hasOwnProperty(field) ? refs[field] : null;
    }

    hideError() {
        this.hideDrop("error");
    }

    showError(error) {
        const { renderer, errorAlign } = this.props;
        const element = findDOMNode(this.getFieldComponent(error.field));

        if (element) {
            this.showDrop("error", renderer.renderError, {
                to: element,
                align: errorAlign,
                hideOnMouseDown: true
            });
        }
    }
}

Form.initPropTypes(FormPropTypes).initDefaultProps({
    renderer: FormRenderer,
    autoComplete: "off",
    errorAlign: "ch tb | ch bt"
});
