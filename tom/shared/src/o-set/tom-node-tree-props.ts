import type { Nullable } from "@positron/lang";

export interface TomNodeTreeProps {
  /**
   *
   */
  readonly left: Nullable<this>;

  /**
   *
   */
  readonly parent: Nullable<this>;

  /**
   *
   */
  readonly right: Nullable<this>;
}
