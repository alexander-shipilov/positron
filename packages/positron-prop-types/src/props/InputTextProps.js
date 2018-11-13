import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { InputElementProps } from "./InputElementProps";
import { RequiredElementProps } from "./RequiredElementProps";
import { TextElementProps } from "./TextElementProps";

export class InputTextProps extends PropsOwner {
    static propTypes = {
      ...InputElementProps.propTypes,
      ...RequiredElementProps.propTypes,
      ...TextElementProps.propTypes,

      list: PropTypes.string
    };
}
