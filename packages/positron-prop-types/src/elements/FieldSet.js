import { compact } from "positron-core";
import { PropsOwner } from "../PropsOwner";
import { FormElement } from "./_FormElement";
import { Element } from "./Element";

export class FieldSet extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        FormElement.propTypes
    );
}
