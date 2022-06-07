import { ReactDOMFactoryElement } from "./ReactDOMFactoryElement";
import { ReactSVGFactory } from "./ReactSVGFactory";
import { ReactSVGTag } from "./ReactSVGTag";

export type ReactSVGElement<Tag extends ReactSVGTag> = ReactDOMFactoryElement<
  ReactSVGFactory<Tag>
>;
