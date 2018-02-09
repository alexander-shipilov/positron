import { compact } from "positron-core";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { Markdown } from "ui/Markdown/index";

export class FormMessage extends Component {
    static propTypes = compact(
        Markdown.propTypes, {
            type: PropTypes.string
        }
    );

    render() {
        const { type, children } = this.props;

        return (
            <div className={ this.block({ [type]: Boolean(type) }) }>
                <Markdown { ...Markdown.filterProps(this.props) } data-title={ String(children) } />
            </div>
        );
    }
}
