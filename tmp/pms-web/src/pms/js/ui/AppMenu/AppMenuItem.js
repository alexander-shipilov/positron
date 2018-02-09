import PropTypes from "prop-types";
import React from "react";
import { AppMenuLink } from "ui/AppMenu/AppMenuLink";
import { Component } from "ui/Component";

export class AppMenuItem extends Component {
    static get name() {
        return "AppMenuItem";
    }

    static propTypes = {
        to: PropTypes.string.isRequired,
        title: PropTypes.node.isRequired,
        icon: PropTypes.string
    };

    renderLink() {
        const { to, title, icon, ...props } = this.props;

        return (
            <AppMenuLink { ...props } to={ to } className={ this.element("link") }>
                { icon ? <i className={ this.element("icon", null, "fa fa-" + icon) } /> : null }
                { title }
            </AppMenuLink>
        );
    }

    render() {
        return (
            <li className={ this.block() }>
                { this.renderLink() }
            </li>
        );
    }
}
