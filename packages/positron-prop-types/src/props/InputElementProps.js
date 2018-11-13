import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";
import { FormElementProps } from "./FormElementProps";

export class InputElementProps extends PropsOwner {
    static propTypes = {
      ...ElementProps.propTypes,
      ...FormElementProps.propTypes,

      autoFocus: PropTypes.bool,
      autoComplete: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.any,

      onChange: PropTypes.func,
      onInput: PropTypes.func,
      onInvalid: PropTypes.func,
      onSubmit: PropTypes.func
    };
}

