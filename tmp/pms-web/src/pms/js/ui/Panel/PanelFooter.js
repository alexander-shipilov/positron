// TODO: implement PanelFooter

import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "ui/Button";
import { Component } from "ui/Component";
import { Markdown } from "ui/Markdown";

export class PanelHeader extends Component {
    static propTypes = {
        headerActions: PropTypes.node,
        close: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
        onClose: PropTypes.func
    };

    render() {
        const { children, close, headerActions, onClose } = this.props;

        return (
            <header { ...Element.filterProps(this.props) } className={ this.block() }>
                <h4 className={ this.element("title") }>
                    <Markdown><span>{ children }</span></Markdown>
                </h4>
                { headerActions }
                {
                    close === true
                        ? <Button className={ this.element("close") } onClick={ onClose } />
                        : close
                }
            </header>
        );
    }
}

