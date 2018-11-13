import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { InputElementProps } from "./InputElementProps";
import { RequiredElementProps } from "./RequiredElementProps";
import { TextElementProps } from "./TextElementProps";

export class TextAreaProps extends PropsOwner {
    static propTypes = {
      ...InputElementProps.propTypes,
      ...RequiredElementProps.propTypes,
      ...TextElementProps.propTypes,

      cols: PropTypes.number,
      rows: PropTypes.number,
      wrap: PropTypes.bool
    };
}
