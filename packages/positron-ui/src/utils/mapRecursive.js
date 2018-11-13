import { Children, cloneElement } from "react";

export function mapRecursive(children, handler) {
  return Children.map(children, (child) => {
    if (child && child.props) {
      child = cloneElement(child, handler(child), mapRecursive(child.props.children, handler));
    }

    return child;
  });
}
