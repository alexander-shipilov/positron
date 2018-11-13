// @flow

import PropTypes from "prop-types";
import { Publisher } from "./Publisher";

export class Action extends Publisher {
  get argTypes() {
    return this._argTypes.concat();
  }

  constructor(...argTypes) {
    super();

    this.define({ _argTypes: argTypes }, false);
  }

  trigger(...args) {
    const { _argTypes: argTypes } = this;

    if (argTypes.length) {
      PropTypes.checkPropTypes(argTypes, args, "arg", this.constructor.name);
    }

    return super.trigger(...args);
  }
}
