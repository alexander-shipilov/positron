import {
  ReactComponent,
  ReactHTMLElement,
  ReactHTMLTag,
  ReactSVGElement,
  ReactSVGTag,
} from "@positron/react-types";
import { ElementTag } from "./ElementTag";

export type ElementTarget<Tag extends ElementTag> = Tag extends ReactComponent
  ? unknown
  : Tag extends ReactHTMLTag
  ? ReactHTMLElement<Tag>
  : Tag extends ReactSVGTag
  ? ReactSVGElement<Tag>
  : Tag extends string
  ? HTMLElement
  : void;
