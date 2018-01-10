import { compact } from "positron-core";
import { FormElement } from "./_FormElement";
import { Element } from "./Element";
import { PropsOwner } from "./PropsOwner";

export class FieldSet extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        FormElement.propTypes
    );
}
