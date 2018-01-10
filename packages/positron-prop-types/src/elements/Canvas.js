import { compact } from "positron-core";
import { PropsOwner } from "../PropsOwner";
import { SizableElement } from "./_SizableElement";
import { Element } from "./Element";

export class Canvas extends PropsOwner {
    static propTypes = compact(
        Element.propTypes,
        SizableElement.propTypes
    );
}
