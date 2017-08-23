import { ComponentRenderer } from "/ui/Component";
import { filterElementProps } from "/ui/Element";
import React from "react";

export class AccentSelectorRenderer extends ComponentRenderer {
    static renderAccent(selector, accent, color) {
        return (
            <button key={ accent } data-accent={ accent } className={ selector.element("accent") }
                style={ { backgroundColor: color } } onClick={ selector.onColorClick } />
        );
    }

    static renderAccents(selector) {
        const { accents } = selector.props;

        return (
            <div className={ selector.element("accents") }>
                { Object.keys(accents).map((key) => this.renderAccent(selector, key, accents[key])) }
            </div>
        );
    }

    static renderExpand(selector) {
        const { accent, accents } = selector.props;

        return (
            <button className={ selector.element("accent", { expand: true }) }
                style={ { backgroundColor: accents[accent] } }
                onClick={ selector.onExpandClick } />
        );
    }

    static render(selector) {
        return (
            <div { ...filterElementProps(selector.props) }  ref={ this.ref(selector, "selector") }
                className={ selector.block() }>
                { this.renderExpand(selector) }
            </div>
        );
    }
}
