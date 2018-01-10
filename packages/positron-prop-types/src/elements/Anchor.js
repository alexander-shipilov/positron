import { compact } from "positron-core";
import PropTypes from "prop-types";
import { Element } from "./Element";
import { PropsOwner } from "./PropsOwner";

export class Anchor extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        {
            download: PropTypes.bool,
            href: PropTypes.string,
            hrefLang: PropTypes.string,
            rel: PropTypes.string,
            target: PropTypes.string,
            type: PropTypes.string
        }
    );
}

