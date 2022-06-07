import { ReactDOMFactoryProps } from "./ReactDOMFactoryProps";
import { ReactSVGFactory } from "./ReactSVGFactory";
import { ReactSVGTag } from "./ReactSVGTag";

export type ReactSVGProps<Tag extends ReactSVGTag> = ReactDOMFactoryProps<
  ReactSVGFactory<Tag>
>;
