import { compact } from "positron-core";
import React from "react";
import { Component } from "ui/Component";
import { Toggle } from "ui/Toggle";

export class Radio extends Component {
    static get name() {
        return "Radio";
    }

    static propTypes = compact(
        Toggle.propTypes
    );

    static defaultProps = {};

    render() {
        return <Toggle { ...Toggle.filterProps(this.props) } type="radio" className={ this.block() } />;
    }
}
