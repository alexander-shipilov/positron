import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";

export class ModProps extends PropsOwner {
    static propTypes = {
      ...ElementProps.propTypes,

      cite: PropTypes.string,
      dateTime: PropTypes.string
    };
}
