import { implement } from "positron-core";
import { BEMClassifier } from "positron-dom";
import { IntlFormatter, IntlOwner } from "positron-intl";
import { PropsOwner } from "positron-prop-types";
import { Component as ReactComponent } from "positron-react";
import PropTypes from "prop-types";

export class Component extends implement(ReactComponent, PropsOwner, IntlOwner, BEMClassifier) {
    static messages = {};

    static propTypes = {
      intl: PropTypes.instanceOf(IntlFormatter)
    };

    get intl() {
      return this.props.intl;
    }

    block(mods = null, ...other) {
      return super.block(mods, ...other, this.props.className);
    }
}
