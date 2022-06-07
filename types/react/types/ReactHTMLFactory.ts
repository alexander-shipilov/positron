import { ReactHTML } from "react";
import { ReactHTMLTag } from "./ReactHTMLTag";

export type ReactHTMLFactory<Tag extends ReactHTMLTag> = ReactHTML[Tag];
