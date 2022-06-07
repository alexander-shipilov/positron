import { ReactDOMFactoryElement } from "./ReactDOMFactoryElement";
import { ReactHTMLFactory } from "./ReactHTMLFactory";
import { ReactHTMLTag } from "./ReactHTMLTag";

export type ReactHTMLElement<Tag extends ReactHTMLTag> = ReactDOMFactoryElement<
  ReactHTMLFactory<Tag>
>;
