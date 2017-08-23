import { Component } from "/Component";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { ModalPropTypes } from "./ModalPropTypes";
import { ModalRenderer } from "./ModalRenderer";

export class Modal extends Component {
    constructor(...args) {
        super(...args);

        this.close = this.close.bind(this);
    }

    close() {
        const { id } = this.props;

        this.constructor.remove(id);
    }

    static remove(id) {
        let container;

        if (!id) {
            throw this.getError("id expected");
        }

        container = document.getElementById("modal-" + id);
        if (container) {
            unmountComponentAtNode(container);
        }
    }

    static render(id, component, props) {
        let container;

        if (!id) {
            throw this.getError("id expected");
        }

        container = document.getElementById("modal-" + id);
        if (!container) {
            container = document.body.appendChild(Object.assign(document.createElement("div"), { id: "modal-" + id }));
        }

        return render(<Modal key="modal" { ...{ id, props } }>{ component }</Modal>, container);
    }
}

Modal.initPropTypes(ModalPropTypes).initDefaultProps({
    renderer: ModalRenderer
});
