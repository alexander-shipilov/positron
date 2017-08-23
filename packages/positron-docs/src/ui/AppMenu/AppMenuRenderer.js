import { ComponentRenderer } from "/ui/Component";
import { filterElementProps } from "/ui/Element";
import React from "react";
import { AppMenuItem } from "./AppMenuItem";

export class AppMenuRenderer extends ComponentRenderer {
    static render(appMenu) {
        const { children, items } = appMenu.props;

        return (
            <nav { ...filterElementProps(appMenu.props) } className={ appMenu.block() }>
                <ul className={ appMenu.element("root") }>
                    { this.renderItems(appMenu, items) }
                </ul>
                { children }
            </nav>
        );
    }

    static renderGroup(appMenu, items, ...parents) {
        return (
            <ul className={ appMenu.element("group", { level: parents.length + 1 }) }>
                { this.renderItems(appMenu, items, ...parents) }
            </ul>
        );
    }

    static renderItem(appMenu, item, index, ...parents) {
        const { actions, intl } = appMenu.props;

        return (
            <AppMenuItem { ...{ key: index, intl, item, parents, actions } }>
                { item.expandable ? this.renderGroup(appMenu, item.entries, ...parents, item) : null }
            </AppMenuItem>
        );
    }

    static renderItems(appMenu, items, ...parents) {
        return items.map((item, index) => this.renderItem(appMenu, item, index, ...parents));
    }
}
