import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { InputTextProps } from "./InputTextProps";

export class InputNumberProps extends PropsOwner {
    static propTypes = {
      ...InputTextProps.propTypes,
      max: PropTypes.number,
      min: PropTypes.number,
      step: PropTypes.number
    };
}
