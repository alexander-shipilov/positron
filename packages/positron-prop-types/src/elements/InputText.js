import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { InputElement } from "./_InputElement";
import { RequiredElement } from "./_RequiredElement";
import { TextElement } from "./_TextElement";

export class InputText extends PropsOwner {
    static propTypes = compact(
        InputElement.propTypes,
        RequiredElement.propTypes,
        TextElement.propTypes,
        {
            list: PropTypes.string
        }
    );
}
