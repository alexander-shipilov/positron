import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";

export class TableColProps extends PropsOwner {
    static propTypes = {
      ...ElementProps.propTypes,

      span: PropTypes.number
    };
}
