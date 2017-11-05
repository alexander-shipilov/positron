import { ComponentRenderer } from "positron-ui/src/ui/Component";
import { filterElementProps } from "positron-ui/src/ui/Element";
import React from "react";
import { DocView } from "../DocView";

export class PageViewRenderer extends ComponentRenderer {
    static render(pageView) {
        const { page } = pageView.state;

        return (
            <DocView { ...filterElementProps(pageView.props) } header={ this.renderHeader(pageView) }
                className={ this.block(pageView) }>
                { page.content }
            </DocView>
        );
    }

    static renderHeader(pageView) {
        const { page } = pageView.state;

        return (
            <h1>{ page.title }</h1>
        );
    }
}
