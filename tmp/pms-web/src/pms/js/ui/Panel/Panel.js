import { compact } from "positron-core";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { PanelHeader } from "ui/Panel/PanelHeader";
import { ScrollArea } from "ui/ScrollArea";
import { Element } from "positron-prop-types";

export class Panel extends Component {
    static get name() {
        return "Panel";
    }

    static propTypes = compact(
        PanelHeader.propTypes,
        ScrollArea.propTypes,
        {
            header: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
            close: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
            onClose: PropTypes.func,
            title: PropTypes.node,
            toolBar: PropTypes.node,
            scrollable: PropTypes.bool
        }
    );

    static defaultProps = compact(
        ScrollArea.defaultProps,
        {
            header: true,
            close: true,
            scrollable: false
        }
    );

    renderHeader() {
        const { header, title } = this.props;

        return header === true
            ? (
                <PanelHeader { ...PanelHeader.filterProps(this.props) } className={ this.element("header") }>
                    { title }
                </PanelHeader>
            )
            : header || null;
    }

    renderToolBar() {
        const { toolBar } = this.props;

        return toolBar
            ? (
                <div className={ this.element("tool-bar") }>
                    { toolBar }
                </div>
            )
            : null;
    }

    renderContent() {
        const { children, scrollable } = this.props;
        const className = this.element("content");

        const content = (
            <div className={ className }>
                { children }
            </div>
        );

        return scrollable
            ? (
                <ScrollArea { ...ScrollArea.filterProps(this.props) } className={ this.element("scroll-area") }>
                    { content }
                </ScrollArea>
            )
            : content;
    }

    render() {
        return (
            <div { ...Element.filterProps(this.props) } className={ this.block() }>
                { this.renderHeader() }
                { this.renderToolBar() }
                { this.renderContent() }
            </div>
        );
    }
}
