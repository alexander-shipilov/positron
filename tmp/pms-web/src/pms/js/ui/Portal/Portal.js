import { compact } from "positron-core";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { Component } from "ui/Component";
import { createElement } from "utils/html";

export class Portal extends Component {
    static propTypes = compact(
        Element.propTypes,
        {
            id: PropTypes.string.isRequired
        }
    );

    componentWillMount() {
        const { id } = this.props;
        const { body } = document;

        this.container = document.getElementById(id) || body.appendChild(createElement("div", { id }));
    }

    componentWillUnmount() {
        const { container } = this;

        super.componentWillUnmount();

        if (container && container.parentNode) {
            container.parentNode.removeChild(container);
        }
    }

    render() {
        return ReactDOM.createPortal(
            (
                <div ref={ this.ref("element") } { ...Element.filterProps(this.props, { id: false }) }
                    className={ this.block() }>
                    { this.props.children }
                </div>
            ),
            this.container
        );
    }
}
