import { compact } from "positron-core";
import PropTypes from "prop-types";
import { InputElement } from "./_InputElement";
import { RequiredElement } from "./_RequiredElement";
import { TextElement } from "./_TextElement";
import { PropsOwner } from "./PropsOwner";

export class TextArea extends PropsOwner {
    static propTypes = compact(
        InputElement.propTypes,
        RequiredElement.propTypes,
        TextElement.propTypes,
        {
            cols: PropTypes.number,
            rows: PropTypes.number,
            wrap: PropTypes.bool
        }
    );
}
