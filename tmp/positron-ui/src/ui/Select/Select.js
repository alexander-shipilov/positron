import { Component } from "/Component";
import { DropOwner } from "/Drop";
import { ENTER, ESC, SPACE, TAB } from "positron-core/src/constants/key-codes";
import { findDOMNode } from "react-dom";
import { FormElement } from "../FormElement";

import "./Select.scss";
import { SelectPropTypes } from "./SelectPropTypes";
import { SelectRenderer } from "./SelectRenderer";

const DROP_ID = "select";

export class Select extends Component.implement(FormElement, DropOwner) {
    onChange = (value) => {
        const { name, onChange } = this.props;

        if (onChange) {
            onChange(value, name);
        }
    };

    onInputKeyDown = (event) => {
        const { keyCode } = event;
        const isVisible = this.isVisibleDrop(this.state);

        if (isVisible) {
            if (keyCode === ESC) {
                event.stopPropagation();

                this.hideDrop();
            }
        } else if (keyCode === ENTER || keyCode === SPACE) {
            event.preventDefault();
            event.stopPropagation();

            this.showDrop(this.props);
        }
    };

    onListKeyDown = (event) => {
        const { keyCode } = event;

        if (keyCode === ESC || keyCode === ENTER || keyCode === SPACE || keyCode === TAB) {
            event.preventDefault();
            event.stopPropagation();

            this.hideDrop();
        }
    };

    onListMouseUp = () => {
        this.hideDrop();
    };

    onMouseDown = () => {
        this.isVisibleDrop(this.state) ? this.hideDrop() : this.showDrop(this.props);
    };

    constructor(...args) {
        super(...args);

        this.initDrop();
        this.initFormElement();
    }

    componentWillUpdate(nextProps, nextState) {
        const { value, options } = this.props;
        const { value: nextValue, options: nextOptions } = nextProps;

        if ((value !== nextValue || options !== nextOptions) && this.isVisibleDrop(nextState)) {
            this.showDrop(nextProps);
        }
    }

    dropDidMount(drop) {
        drop = findDOMNode(drop);

        setTimeout(() => drop.querySelector("select").focus(), 100);
        this.addEventListener(drop.querySelector(".list"), "mouseup", this.onListMouseUp, true);
    }

    dropWillUnmount() {
        findDOMNode(this).querySelector("input").focus();
    }

    hideDrop() {
        super.hideDrop(DROP_ID);
    }

    isVisibleDrop(state) {
        return super.isVisibleDrop(state, DROP_ID);
    }

    showDrop(props) {
        const { renderer, value, options } = props;

        super.showDrop(DROP_ID, renderer.renderList, {
            to: this,
            align: "ll rr tb | ll rr bt",
            hideOnMouseDown: true,
            hideOnScroll: true,
            value, options
        });
    }
}

Select.initPropTypes(SelectPropTypes).initDefaultProps({
    renderer: SelectRenderer
});
