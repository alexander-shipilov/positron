import { Accent, filterAccentProps } from "/ui/Accent";
import { ComponentRenderer } from "/ui/Component";
import { Icon } from "/ui/Icon";
import { Sprite } from "/ui/Sprite";
import { ACCENT_COLORS } from "positron-core/constants/accents";
import React from "react";
import { AccentSelector } from "../AccentSelector";
import { AppMenu } from "../AppMenu";

export class AppRenderer extends ComponentRenderer {
    static render(app) {
        const { settings: { accent, expanded } } = app.props;

        return (
            <Accent { ...filterAccentProps(app.props) } accent={ accent } className={ app.block({ expanded }) }>
                { this.renderHeader(app) }
                { this.renderMain(app) }
                { this.renderFooter(app) }
                { this.renderSideBar(app) }
            </Accent>
        );
    }

    static renderMain(app) {
        const { children } = app.props;

        return (
            <main className={ app.element("main") } onMouseDown={ app.onMainMouseClick }>
                { children }
            </main>
        );
    }

    static renderFooter(app) {
        return (
            <footer className={ app.element("footer") }>
                <address>
                    <a href="https://github.com/alexander-shipilov/positron-ui">
                        <Icon iconset="ion" glyph="social-github" />
                    </a>
                </address>
            </footer>
        );
    }

    static renderHeader(app) {
        const { settings: { accent } } = app.props;

        return (
            <header className={ app.element("header") }>
                <Icon iconset="ion" glyph="navicon" className={ app.element("toggle") } onClick={ app.onExpandClick } />
                <Sprite glyph="sprites.svg#logo" className={ app.element("logo") } />
                <h1 className={ app.element("title") } />
                <AccentSelector accents={ ACCENT_COLORS } accent={ accent }
                    className={ app.element("accent-selector") } onSelect={ app.onAccentSelect } />
            </header>
        );
    }

    static renderSideBar(app) {
        const { menu: items, menuActions: actions, intl } = app.props;

        return (
            <aside className={ app.element("side-bar") }>
                <AppMenu { ...{ actions, intl, items } } className={ app.element("menu") } />
            </aside>
        );
    }
}
