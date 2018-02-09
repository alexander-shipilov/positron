import React from "react";
import { Component } from "ui/Component";
import { AppMenuGroup } from "./AppMenuGroup";
import { AppMenuItem } from "./AppMenuItem";

export class AppMenu extends Component {
    static get name() {
        return "AppMenu";
    }

    renderItems() {
        const { items } = this.props;

        return items.map((item, key) => {
            const Item = item.items ? AppMenuGroup : AppMenuItem;

            return <Item key={ key } { ...item } className={ this.element("item") } />;
        });
    }

    render() {
        const { items, ...props } = this.props;

        return (
            <nav { ...props } className={ this.block() } role="navigation">
                { items ? <ul className={ this.element("menu") }>{ this.renderItems() }</ul> : null }
            </nav>
        );
    }
}
