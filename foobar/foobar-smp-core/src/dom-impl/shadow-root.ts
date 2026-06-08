import type { DomElement, DomShadowRoot, DomShadowRootMode } from "../dom";

import { DocumentFragment } from "./document-fragment";
import { DocumentOrShadowRoot } from "./document-or-shadow-root";

export class ShadowRoot
  extends DocumentOrShadowRoot(DocumentFragment)
  implements DomShadowRoot
{
  public clonable: boolean;

  public host: DomElement;

  public mode: DomShadowRootMode;

  public serializable: boolean;
}
