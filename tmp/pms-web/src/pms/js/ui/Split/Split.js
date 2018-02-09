// @flow

import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import * as React from "react";
import type { ComponentProps } from "ui/Component";
import { Component } from "ui/Component";

export type SplitBarSide = "left" | "top" | "right" | "bottom";

export interface SplitProps extends ComponentProps {
    bar: React.Component,
    barSide: SplitBarSide
}

export class Split extends Component {
    static propTypes = {
        bar: PropTypes.element,
        barFloat: PropTypes.bool,
        barSide: PropTypes.oneOf(["left"]),
        barSize: PropTypes.oneOf(["xx-small", "x-small", "medium", "large", "x-large", "xx-large"]),
        children: PropTypes.element
    };

    static defaultProps = {
        barSide: "left"
    };

    renderBar() {
        const { bar, barSize: size } = this.props;

        return this.renderElement(bar, "bar", { size });
    }

    render() {
        const { children, barSide: side, barFloat: float } = this.props;

        return (
            <div { ...Element.filterProps(this.props) } className={ this.block({ [side]: true, float }) }>
                { this.renderElement(children, "content") }
                { this.renderBar() }
            </div>
        );
    }
}