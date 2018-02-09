import React from "react";
import PropTypes from "prop-types";
import { Component } from "ui/Component";

export class Spinner extends Component {
    static propTypes = {
        center: { type: PropTypes.bool }
    };

    render() {
        const { center } = this.props;

        return (
            <div className={ this.block({ center }) }>
                <div className="bounce spinner__bounce" />
                <div className="bounce spinner__bounce" />
                <div className="bounce spinner__bounce" />
            </div>
        );
    }
}
