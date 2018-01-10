import { compact } from "positron-core";
import { PropsOwner } from "../PropsOwner";
import { CheckedElement } from "./_CheckedElement";
import { InputElement } from "./_InputElement";

export class InputRadio extends PropsOwner {
    static propTypes = compact(
        InputElement.propTypes,
        CheckedElement.propTypes
    );
}
