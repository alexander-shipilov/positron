import { warning } from "positron-core/src/console";
import { Component as CoreComponent } from "positron-core/src/react";
import { uid } from "positron-core/src/string";
import { BemClassifier } from "../BemClassifier";
import { Element } from "../Element";

import { ComponentPropTypes } from "./ComponentPropTypes";
import { ComponentRenderer } from "./ComponentRenderer";

export class Component extends CoreComponent.implement(Element, BemClassifier) {
    get id() {
        return this.hasOwnProperty("_id") ? this._id : this.define({ _id: uid("infinity") })._id;
    }

    block(modifiers, ...other) {
        return super.block(modifiers, this.props.className, ...other);
    }

    formatMessage(message, params) {
        const { intl } = this.props;

        message = this.className + (message ? "-" + message : "");
        if (!intl) {
            this.warning("intl required");
        }

        return intl ? intl.formatMessage(message, params) : message;
    }

    render() {
        const { renderer } = this.props;

        return renderer.render(this);
    }

    warning(message) {
        return warning(this + ": " + message);
    }
}

Component.initPropTypes(ComponentPropTypes).initDefaultProps({
    renderer: ComponentRenderer
});
