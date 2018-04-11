import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";

export class AnchorProps extends PropsOwner {
    static propTypes = {
        ...ElementProps.propTypes,
        download: PropTypes.bool,
        href: PropTypes.string,
        hrefLang: PropTypes.string,
        rel: PropTypes.string,
        target: PropTypes.string,
        type: PropTypes.string
    };
}

