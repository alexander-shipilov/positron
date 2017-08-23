import { ComponentRenderer } from "/ui/Component/index";
import { filterElementProps } from "/ui/Element/index";
import React from "react";
import { DocView } from "../../ui/DocView/index";
import { Markdown } from "../../ui/Markdown/index";

export class InstallationRenderer extends ComponentRenderer {
    static renderHeader(installation) {
        return (
            <h1>{ installation.formatMessage("title") }</h1>
        );
    }

    static render(installation) {
        console.log(installation.props);

        return (
            <DocView { ...filterElementProps(installation.props) } header={ this.renderHeader(installation) }
                className={ installation.block() }>
                <Markdown>{ installation.formatMessage("content") }</Markdown>
            </DocView>
        );
    }
}
