import { compact } from "positron-core";
import { SizableElement } from "./_SizableElement";
import { Element } from "./Element";
import { PropsOwner } from "./PropsOwner";

export class Canvas extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        SizableElement.propTypes
    );
}
