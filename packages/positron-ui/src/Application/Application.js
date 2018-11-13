// @flow

import React, { Children } from "react";
import { Component } from "../Component";
import { IntlFormatter } from "positron-intl";

export interface ApplicationProps {
    intl: IntlFormatter
}

export class Application extends Component {
    static propTypes = {
      intl: IntlFormatter
    };

    props: ApplicationProps;

    processChildren(children) {

    }

    renderChildren() {
      return Children.map();
    }

    render() {
      return (
        <div className={ this.block() } />
      );
    }
}
