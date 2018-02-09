import React, { Children, cloneElement } from "react";
import { Component } from "ui/Component";

export class Row extends Component {
    static get name() {
        return "Row";
    }

    static defaultProps = {
        cols: 4
    };

    renderChildren() {
        const { children, cols } = this.props;
        const hasCols = cols > 0 && isFinite(cols);

        return Children.map(children, (child) => {
            if (child && hasCols) {
                child = cloneElement(child, { size: Math.ceil(12 / cols) });
            }

            return child;
        });
    }

    render() {
        return (
            <div className={ this.block() }>
                { this.renderChildren() }
            </div>
        );
    }
}
