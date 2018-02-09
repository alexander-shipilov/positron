import React from "react";
import { IndexLink } from "react-router";
import { AppMenu } from "ui/AppMenu";
import { Component } from "ui/Component";

export class AppHeader extends Component {
    static get name() {
        return "AppHeader";
    }

    state = { expanded: false };

    onMenuClick = (event) => {
        event.stopPropagation();

        this.setState({ expanded: !this.state.expanded });
    };

    renderToggle() {
        return (
            <button type="button" className={ this.element("toggle") } onClick={ this.onMenuClick }>
                <span className="sr-only">Toggle navigation</span>
                <i className="fa fa-bars" />
            </button>
        );
    }

    renderMenu() {
        const { menu } = this.props;
        const { expanded } = this.state;

        return (
            <AppMenu items={ menu } className={ this.element("menu", { expanded }) } onClick={ this.onMenuClick } />
        );
    }

    render() {
        const { menu } = this.props;

        return (
            <header className={ this.block() } role="banner">
                <div className="container">
                    <div className={ this.element("header") }>
                        <IndexLink to="/" className={ this.element("brand") }>
                            <img src="/images/logo.png" alt="BotPad Powered by BluePrism (R)"
                                className={ this.element("logo") } />
                        </IndexLink>

                        { menu ? this.renderToggle() : null }
                    </div>

                    { menu ? this.renderMenu() : null }
                </div>
            </header>
        );
    }
}
