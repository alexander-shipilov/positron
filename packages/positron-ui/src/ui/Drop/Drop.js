import { alignTo, containsOrSelf, parseAligns } from "positron-core/src/dom";
import { Rect } from "positron-core/src/dom-rect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { Component } from "../Component";
import { External } from "../External";

import "./Drop.scss";
import { DropPropTypes } from "./DropPropTypes";
import { DropRenderer } from "./DropRenderer";


export class Drop extends Component.implement(External) {
    static mount(id, props) {
        const Drop = this;
        const container = this.mountContainer(id);

        render(<Drop { ...props } { ...{ key: id, id, container } } />, container);
    }

    static mountContainer(id) {
        let container = document.getElementById(id);
        if (!container) {
            container = document.body.appendChild(document.createElement("div"));
            container = Object.assign(container, { id, className: "drop-container" });
        }

        return container;
    }

    static unmount(id) {
        const container = document.getElementById(id);

        if (container) {
            unmountComponentAtNode(container);
            container.parentNode.removeChild(container);
        }
    }

    onDocumentMouseDown = ({ target }) => {
        const { props: { to, hideOnMouseDown }, drop } = this;

        if (hideOnMouseDown && !containsOrSelf(drop, target) && !containsOrSelf(to, target)) {
            this.hide();
        }
    };

    onParentScroll = () => {
        this.props.hideOnScroll ? this.hide() : this.align();
    };

    onWindowResize = () => {
        this.props.hideOnResize ? this.hide() : this.align();
    };

    constructor(...args) {
        super(...args);
        this.initExternal();
    }

    addEventListeners() {
        this.addEventListener(document, "mousedown touchstart", this.onDocumentMouseDown);
        this.addEventListener(window, "resize", this.onWindowResize);
        this.addScrollListeners();
    }

    addScrollListeners() {
        let parent = this.props.to.parentNode;

        while (parent) {
            this.addEventListener(parent, "scroll", this.onParentScroll);
            parent = parent.parentNode;
        }
    }

    align() {
        const { align, container, to } = this.props;
        const aligns = parseAligns(align);
        let rect;

        Object.assign(container.style, { visibility: "hidden" }, Rect.from().toStyle());

        rect = alignTo(container, to, ...aligns).shift();

        console.log(
            Rect.fromElement(container),
            alignTo(container, to, ...aligns).shift().toStyle(),
            rect.constrain(Rect.fromElement(container)).toStyle()
        );

        //rect = Rect.fromElement(container).constrain(rect);

        Object.assign(container.style, rect.toStyle(), { visibility: "visible" });
    }

    componentDidMount() {
        const { owner } = this.props;

        this.addEventListeners();
        this.align();

        owner.dropDidMount(this);
    }

    componentDidUpdate() {
        this.align();
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.props.owner.dropWillUnmount(this);
    }

    hide() {
        const { owner, id } = this.props;

        owner.hideDrop(id);
    }
}

Drop.initPropTypes(DropPropTypes).initDefaultProps({
    renderer: DropRenderer,
    align: "tb | bt",
    hideOnMouseDown: false,
    hideOnScroll: false,
    hideOnResize: false
});
