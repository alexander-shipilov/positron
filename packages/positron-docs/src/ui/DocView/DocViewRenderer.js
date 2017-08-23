import { ComponentRenderer } from "/ui/Component";
import { filterElementProps } from "/ui/Element";
import React from "react";

export class DocViewRenderer extends ComponentRenderer {
    static render(docView) {
        const { children, footer, header } = docView.props;

        return (
            <section { ...filterElementProps(docView.props) } className={ docView.block() }>
                { header ? this.renderHeader(docView, header) : null }
                { children }
                { footer ? this.renderFooter(docView, footer) : null }
            </section>
        );
    }

    static renderHeader(docView, header) {
        return (
            <header className={ docView.element("header") }>{ header }</header>
        );
    }

    static renderFooter(docView, footer) {
        return (
            <footer className={ docView.element("footer") }>{ footer }</footer>
        );
    }
}
