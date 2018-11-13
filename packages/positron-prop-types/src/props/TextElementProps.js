import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";

export class TextElementProps extends PropsOwner {
    static propTypes = {
      maxLength: PropTypes.number,
      minLength: PropTypes.number,
      readOnly: PropTypes.bool,
      placeholder: PropTypes.string
    };
}
