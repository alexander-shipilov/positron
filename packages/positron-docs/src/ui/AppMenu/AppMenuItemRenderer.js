import { ComponentRenderer } from "positron-ui/src/ui/Component";
import { filterElementProps } from "positron-ui/src/ui/Element";
import { Icon } from "positron-ui/src/ui/Icon";
import React from "react";
import { Link } from "react-router";

export class AppMenuItemRenderer extends ComponentRenderer {
    static render(appMenuItem) {
        const { children, item, parents } = appMenuItem.props;
        const { expandable, expanded } = item;

        return (
            <li { ...filterElementProps(appMenuItem.props) }
                className={ appMenuItem.block({ level: parents.length + 1, expandable, expanded }) }>
                { this.renderTitle(appMenuItem) }
                { item.expandable ? this.renderToggle(appMenuItem) : null }
                { children }
            </li>
        );
    }

    static renderIcon(appMenuItem) {
        const { item } = appMenuItem.props;

        return (
            <Icon iconset="ion" glyph={ item.icon } className={ appMenuItem.element("icon") } />
        );
    }

    static renderTitle(appMenuItem) {
        const { intl, item, parents } = appMenuItem.props;
        const href = [...parents, item].map((item) => item.ref).join("/");
        const className = appMenuItem.element("title");

        return (
            <Link to={ `/${ intl.locale }/${ href }` } className={ className }
                activeClassName={ appMenuItem.modifiers(className, { active: true }) }>
                { item.icon ? this.renderIcon(appMenuItem) : null }{ item.title }
            </Link>
        );
    }

    static renderToggle(appMenuItem) {
        return (
            <Icon iconset="ion" glyph="chevron-down" className={ appMenuItem.element("toggle") }
                onClick={ appMenuItem.onToggleClick } />
        );
    }
}
