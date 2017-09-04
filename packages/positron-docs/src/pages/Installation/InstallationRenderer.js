import { ComponentRenderer } from "positron-ui/src/ui/Component";
import { filterElementProps } from "positron-ui/src/ui/Element";
import React from "react";
import { DocView } from "../../ui/DocView";
import { Markdown } from "../../ui/Markdown";

export class InstallationRenderer extends ComponentRenderer {
    static render(installation) {
        console.log(installation.props);

        return (
            <DocView { ...filterElementProps(installation.props) } header={ this.renderHeader(installation) }
                className={ installation.block() }>
                <Markdown>{ installation.formatMessage("content") }</Markdown>
            </DocView>
        );
    }

    static renderHeader(installation) {
        return (
            <h1>{ installation.formatMessage("title") }</h1>
        );
    }
}
