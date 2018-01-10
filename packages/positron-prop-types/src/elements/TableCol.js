import { compact } from "positron-core";
import PropTypes from "prop-types";
import { Element } from "./Element";
import { PropsOwner } from "./PropsOwner";

export class TableCol extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            span: PropTypes.number
        }
    );
}
