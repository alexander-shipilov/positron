import PropTypes from "prop-types";
import React from "react";
import { AppMenuLink } from "ui/AppMenu/AppMenuLink";
import { Component } from "ui/Component";

import { AppMenuItem } from "./AppMenuItem";

export class AppMenuGroup extends Component {
    static get name() {
        return "AppMenuGroup";
    }

    static propTypes = {
        title: PropTypes.node.isRequired,
        items: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    state = { hover: false };

    onLinkClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    onItemClick = () => {
        this.setHoverState(false);
    };

    onMouseEnter = () => {
        this.setHoverState(true);
    };

    onMouseLeave = () => {
        this.setHoverState(false);
    };

    setHoverState(hover) {
        if (hover !== this.state.hover) {
            this.setState({ hover });
        }
    }

    renderItems() {
        const { items } = this.props;

        return items.map((item, key) => (
            <AppMenuItem key={ key } { ...item } icon="angle-double-right" tabIndex={ -1 }
                className={ this.element("item") }
                onClick={ this.onItemClick }>
            </AppMenuItem>
        ));
    }

    render() {
        const { title, to } = this.props;
        const { hover } = this.state;

        return (
            <li className={ this.block({ hover }) } onMouseEnter={ this.onMouseEnter }
                onMouseLeave={ this.onMouseLeave }>
                <AppMenuLink to={ to } onMouseDown={ this.onMouseEnter } onClick={ this.onLinkClick }>
                    { title }
                    <i className={ this.element("caret", null, "fa fa-caret-down") } />
                </AppMenuLink>

                <ul className={ this.element("menu") } role="menu">
                    { this.renderItems() }
                </ul>
            </li>
        );
    }
}
