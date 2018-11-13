// @flow

import { IntlFormatter } from "positron-intl";
import { Component } from "../Component";
import { mapRecursive } from "../utils";

export interface IntlContextProps {
    intl: IntlFormatter
}

export class IntlContext extends Component {
    static propTypes = {
      intl: IntlFormatter
    };

    props: IntlContextProps;

    processChild = (child) => {
      const { intl } = this.props.intl;
      const { type: { propTypes }, props } = child;
      const nextProps = {};

      if (propTypes.intl && !props.intl) {
        nextProps.intl = intl;
      }

      return nextProps;
    };

    render() {
      const { children } = this.props;

      return mapRecursive(children, this.processChild);
    }
}
