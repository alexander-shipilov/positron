import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";

export class SizableElementProps extends PropsOwner {
    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number
    }
}
