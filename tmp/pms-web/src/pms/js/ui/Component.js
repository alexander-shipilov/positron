// @flow

import { implement } from "positron-core";
import { BEMClassifier } from "positron-dom";
import { IntlFormatter, IntlOwner } from "positron-intl";
import { PropsOwner } from "positron-prop-types";
import { Component as PositronComponent } from "positron-react";
import PropTypes from "prop-types";
import React from "react";

export interface ComponentProps {
    intl?: IntlFormatter,
    className?: string
}

export interface ComponentState {
}

export class Component<P: ComponentProps, S: ComponentState | void>
    extends implement(PositronComponent, PropsOwner, IntlOwner, BEMClassifier) {
    static propTypes = {
        intl: PropTypes.instanceOf(IntlFormatter),
        className: PropTypes.string
    };

    props: P | ComponentProps;

    state: S | ComponentState;

    get intl(): IntlFormatter {
        return this.props.intl;
    }

    block(mods: Object = null, ...other: string[]): string {
        return super.block(mods, ...other, this.props.className);
    }

    renderElement(element, name, mods = null, ...props: Object[]) {
        return element
            ? React.cloneElement(content, Object.assign({}, ...props, {
                className: this.element(name, mods, element.props.className)
            }))
            : null;
    }
}
