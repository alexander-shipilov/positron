import PropTypes from "prop-types";
import React from "react";
import { IndexLink, Link } from "react-router";
import { Component } from "ui/Component";

export class AppMenuLink extends Component {
    static get name() {
        return "AppMenuLink";
    }

    static propTypes = {
        to: PropTypes.string.isRequired
    };

    render() {
        const { to, children } = this.props;
        const RouterLink = to === "/" ? IndexLink : Link;

        return (
            <RouterLink { ...this.props } to={ to } className={ this.block() }
                activeClassName={ this.modifiers({ active: true }) }>
                { children }
            </RouterLink>
        );
    }
}
