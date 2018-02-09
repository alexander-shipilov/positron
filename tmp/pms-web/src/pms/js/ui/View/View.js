import { compact } from "positron-core";
import { Element } from "positron-prop-types";
import React from "react";
import { Component } from "ui/Component";

export class View extends Component {
    static propTypes = compact(Element.propTypes);

    render() {
        const { children } = this.props;

        return (
            <div { ...Element.filterProps(this.props) } className={ this.block() }>
                { children }
            </div>
        );
    }
}
