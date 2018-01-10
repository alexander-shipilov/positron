import { compact } from "positron-core";
import PropTypes from "prop-types";

import { PropsOwner } from "../PropsOwner";
import { InputElement } from "./_InputElement";
import { RequiredElement } from "./_RequiredElement";

export class InputFile extends PropsOwner {
    static propTypes = compact(
        InputElement.propTypes,
        RequiredElement.propTypes,
        {
            accept: PropTypes.string,
            capture: PropTypes.bool,
            multiple: PropTypes.bool
        }
    );
}
