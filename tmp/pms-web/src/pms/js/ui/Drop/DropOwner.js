import { compact } from "positron-core";
import { BoundedRect, contains, containsOrSelf } from "positron-dom";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { findDOMNode } from "react-dom";
import { Component } from "ui/Component";
import { Drop } from "ui/Drop";

function isHidden(target, el) {
    const { top, bottom, height } = BoundedRect.fromElement(el);

    return contains(target, el) && -Math.min(top, bottom) > height;
}

export class DropOwner extends Component {
    static get name() {
        return "DropOwner";
    }

    static propTypes = compact(
        Element.propTypes,
        {
            hideDrop: PropTypes.func.isRequired,

            dropAlign: PropTypes.string,
            dropClassName: PropTypes.string,
            dropVisible: PropTypes.bool,

            hideDropOnScroll: PropTypes.bool,
            hideDropOnResize: PropTypes.bool,
            hideDropOnMouseDown: PropTypes.bool
        }
    );

    static defaultProps = {
        dropAlign: "bt ch | tb ch",
        hideDropOnMouseDown: true,
        hideDropOnResize: true
    };

    hideDrop = () => {
        this.props.hideDrop();
    };

    alignDrop = () => {
        const { dropAlign } = this.props;

        if (this.drop) {
            this.drop.alignTo(this.container, dropAlign);
        }
    };

    onWheel = (event) => {
        event.stopPropagation();
        event.preventDefault();
    };

    onDocumentScroll = (event) => {
        const { dropVisible, hideDropOnScroll } = this.props;

        if (dropVisible) {
            if (hideDropOnScroll || isHidden(event.target, this.container)) {
                this.hideDrop();
            } else if (contains(event.target, this.container)) {
                this.alignDrop();
            }
        }
    };

    onDocumentMouseDown = ({ target }) => {
        const { dropVisible, hideDropOnMouseDown } = this.props;

        if (dropVisible && hideDropOnMouseDown) {
            const dropNode = findDOMNode(this.drop);

            if (dropNode && !containsOrSelf(dropNode, target)) {
                this.hideDrop();
            }
        }
    };

    onWindowResize = () => {
        const { dropVisible, hideDropOnResize } = this.props;

        if (dropVisible && hideDropOnResize) {
            this.props.hideDropOnResize ? this.hideDrop() : this.alignDrop();
        }
    };

    componentDidMount() {
        this.alignDrop();

        this.addDOMListener(document, "scroll", this.onDocumentScroll, true);
        this.addDOMListener(document, "mousedown touchstart", this.onDocumentMouseDown, true);
        this.addDOMListener(window, "resize", this.onWindowResize);
    }

    componentDidUpdate() {
        this.alignDrop();
    }

    renderDrop() {
        const { id, drop, dropVisible } = this.props;

        return drop && dropVisible
            ? (
                <Drop ref={ this.ref("drop") } id={ id } omWheel={ this.onWheel }>
                    { drop }
                </Drop>
            )
            : null;
    }

    render() {
        const { children } = this.props;

        return (
            <div ref={ this.ref("container") } { ...Element.filterProps(this.props, { id: false }) }
                className={ this.block() }>
                { children }
                { this.renderDrop() }
            </div>
        );
    }
}
