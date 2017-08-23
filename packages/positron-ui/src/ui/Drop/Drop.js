import { Component } from "/ui/Component";
import { External } from "/ui/External";
import { alignTo, containsOrSelf, parseAligns } from "positron-core/dom";
import { Bounds, BoundedRect, Rect } from "positron-core/dom-rect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import "./Drop.scss";
import { DropPropTypes } from "./DropPropTypes";
import { DropRenderer } from "./DropRenderer";


export class Drop extends Component.implement(External) {
    init(...args) {
        super.init(...args);
        this.initExternal();

        this.onParentScroll = this.onParentScroll.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
        this.onDocumentMouseDown = this.onDocumentMouseDown.bind(this);
    }

    align() {
        const { align, container, to } = this.props;
        const aligns = parseAligns(align);
        let rect;

        Object.assign(container.style, { visibility: "hidden" }, Rect.from().toStyle());

        rect = alignTo(container, to, ...aligns).shift()
            .contourIn(Rect.fromElement(container.offsetParent));

        console.log(
            Rect.fromElement(container),
            alignTo(container, to, ...aligns).shift().toStyle(),
            rect.constrain(Rect.fromElement(container)).toStyle()
        );

        //rect = Rect.fromElement(container).constrain(rect);

        Object.assign(container.style, rect.toStyle(), { visibility: "visible" });
    }

    hide() {
        const { owner, id } = this.props;

        owner.hideDrop(id);
    }

    onWindowResize() {
        this.props.hideOnResize ? this.hide() : this.align();
    }

    onParentScroll() {
        this.props.hideOnScroll ? this.hide() : this.align();
    }

    onDocumentMouseDown({ target }) {
        const { props: { to, hideOnMouseDown }, drop } = this;

        if (hideOnMouseDown && !containsOrSelf(drop, target) && !containsOrSelf(to, target)) {
            this.hide();
        }
    }

    addScrollListeners() {
        let parent = this.props.to.parentNode;

        while (parent) {
            this.addEventListener(parent, "scroll", this.onParentScroll);
            parent = parent.parentNode;
        }
    }

    addEventListeners() {
        this.addEventListener(document, "mousedown touchstart", this.onDocumentMouseDown);
        this.addEventListener(window, "resize", this.onWindowResize);
        this.addScrollListeners();
    }

    componentDidMount() {
        const { owner } = this.props;

        this.addEventListeners();
        this.align();

        owner.dropDidMount(this);
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.props.owner.dropWillUnmount(this);
    }

    componentDidUpdate() {
        this.align();
    }

    static mountContainer(id) {
        let container = document.getElementById(id);
        if (!container) {
            container = document.body.appendChild(document.createElement("div"));
            container = Object.assign(container, { id, className: "drop-container" });
        }

        return container;
    }

    static mount(id, props) {
        const Drop = this;
        const container = this.mountContainer(id);

        render(<Drop { ...props } { ...{ key: id, id, container } } />, container);
    }

    static unmount(id) {
        const container = document.getElementById(id);

        if (container) {
            unmountComponentAtNode(container);
            container.parentNode.removeChild(container);
        }
    }
}

Drop.initPropTypes(DropPropTypes).initDefaultProps({
    renderer: DropRenderer,
    align: "tb | bt",
    hideOnMouseDown: false,
    hideOnScroll: false,
    hideOnResize: false
});
