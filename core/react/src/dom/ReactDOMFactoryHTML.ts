import type { ReactHTML } from "react";

import type { ReactDOMTagHTML } from "./ReactDOMTagHTML";

export type ReactDOMFactoryHTML<TTag extends ReactDOMTagHTML> = ReactHTML[TTag];
