import { ReactDOMFactoryProps } from "./ReactDOMFactoryProps";
import { ReactHTMLFactory } from "./ReactHTMLFactory";
import { ReactHTMLTag } from "./ReactHTMLTag";

export type ReactHTMLProps<Tag extends ReactHTMLTag> = ReactDOMFactoryProps<
  ReactHTMLFactory<Tag>
>;
