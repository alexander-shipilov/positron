import { Children, cloneElement } from "react";

export function mapChildren(children, handler) {
  return Children.map(children, (child) => {
    if (child && child.props) {
      child = cloneElement(child, handler(child), mapChildren(child.props.children, handler));
    }

    return child;
  });
}
