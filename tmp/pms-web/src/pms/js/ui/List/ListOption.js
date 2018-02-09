import { compact } from "positron-core";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";

export class ListOption extends Component {
    static get name() {
        return "ListOption";
    }

    static propTypes = compact(
        Element.propTypes,
        {
            selected: PropTypes.bool
        }
    );

    render() {
        const { children, selected } = this.props;

        return (
            <div { ...Element.filterProps(this.props) } className={ this.block({ selected }) }>
                <label className={ this.element("label") }>
                    { children }
                </label>
            </div>
        );
    }
}
