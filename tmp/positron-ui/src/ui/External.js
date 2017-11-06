import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

export class External {
    static render(id, props) {
        const External = this;
        const container = this.renderContainer(id);

        render(<External { ...props } { ...{ key: id, id, container } } />, container);
    }

    static renderContainer(id) {
        return document.getElementById(id) || document.body.appendChild(document.createElement("div"));
    }

    static unmount(id) {
        const container = document.getElementById(id);

        if (container) {
            unmountComponentAtNode(container);
        }
    }

    initExternal() {
    }
}

export const ExternalPropTypes = {
    id: PropTypes.string.isRequired,
    owner: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired
};

export const filterExternalProps = createPropsFilter(ExternalPropTypes);
