import type { ReactComponent } from "@positron/react-core";

/**
 *The {@link ElementProps} type represents a properties of the element descriptor.
 *
 * @public
 */
export type ElementProps<TComponentProps> = {
  Component: ReactComponent<TComponentProps>;
  className?: string;
};
