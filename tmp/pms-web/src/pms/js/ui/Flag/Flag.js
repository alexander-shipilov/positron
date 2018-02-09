import { compact } from "positron-core";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";

export class Flag extends Component {
    static propTypes = compact(
        Element.propTypes,
        {
            country: PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string
            })
        }
    );

    render() {
        const { country: { id, name } } = this.props;

        return <img src="/images/blank.gif" className={ this.block({ [id]: true }) } alt={ name } />;
    }
}
