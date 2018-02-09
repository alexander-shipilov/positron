// @flow

import { compact } from "positron-core";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React, { Children } from "react";
import type { ComponentProps } from "ui/Component";
import { Component } from "ui/Component";

export interface AppPageProps extends ComponentProps {
    header?: boolean | React.Node,
    title?: React.Node
}

export class AppPage extends Component<AppPageProps, void> {
    static get name() {
        return "AppPage";
    }

    static propTypes = compact(
        Element.propTypes,
        {
            header: PropTypes.oneOf([PropTypes.node, PropTypes.bool]),
            title: PropTypes.node
        }
    );

    static defaultProps = compact(
        {
            header: true
        }
    );

    renderTitle() {
        const { title } = this.props;

        return title
            ? (
                <h1 className={ this.element("title") }>
                    { title }
                </h1>
            )
            : null;
    }

    renderHeader() {
        const { header } = this.props;

        return header === true
            ? (
                <header className={ this.element("header") }>
                    { this.renderTitle() }
                </header>
            )
            : header;
    }

    render() {
        const { children } = this.props;

        return (
            <main { ...Element.filterProps(this.props) } className={ this.block(null, "animated fadeIn") }>
                { this.renderHeader() }

                <div className={ this.element("content") }>
                    { Children.count(children) ? children : null }
                </div>
            </main>
        );
    }
}
