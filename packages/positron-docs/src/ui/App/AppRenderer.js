import { ACCENT_COLORS } from "positron-core/src/constants/accents";
import { Accent, filterAccentProps } from "positron-ui/src/ui/Accent";
import { ComponentRenderer } from "positron-ui/src/ui/Component";
import { Icon } from "positron-ui/src/ui/Icon";
import { Sprite } from "positron-ui/src/ui/Sprite";
import React from "react";
import { AccentSelector } from "../AccentSelector";
import { AppMenu } from "../AppMenu";

export class AppRenderer extends ComponentRenderer {
    static render(app) {
        const { settings: { accent, expanded } } = app.props;

        return (
            <Accent { ...filterAccentProps(app.props) } accent={ accent } className={ this.block(app, { expanded }) }>
                { this.renderHeader(app) }
                { this.renderMain(app) }
                { this.renderFooter(app) }
                { this.renderSideBar(app) }
            </Accent>
        );
    }

    static renderFooter(app) {
        return (
            <footer className={ this.element(app, "footer") }>
                <address>
                    <a href="https://github.com/alexander-shipilov/positron">
                        <Icon iconset="ion" glyph="social-github" />
                    </a>
                </address>
            </footer>
        );
    }

    static renderHeader(app) {
        const { settings: { accent } } = app.props;

        return (
            <header className={ this.element(app, "header") }>
                <Icon iconset="ion" glyph="navicon" className={ this.element(app, "toggle") }
                    onClick={ app.onExpandClick } />
                <Sprite glyph="sprites.svg#logo" className={ this.element(app, "logo") } />
                <h1 className={ this.element(app, "title") } />
                <AccentSelector accents={ ACCENT_COLORS } accent={ accent }
                    className={ this.element(app, "accent-selector") } onSelect={ app.onAccentSelect } />
            </header>
        );
    }

    static renderMain(app) {
        const { children } = app.props;

        return (
            <main className={ this.element(app, "main") } onMouseDown={ app.onMainMouseClick }>
                { children }
            </main>
        );
    }

    static renderSideBar(app) {
        const { menu: items, menuActions: actions, intl } = app.props;

        return (
            <aside className={ this.element(app, "side-bar") }>
                <AppMenu { ...{ actions, intl, items } } className={ this.element(app, "menu") } />
            </aside>
        );
    }
}
