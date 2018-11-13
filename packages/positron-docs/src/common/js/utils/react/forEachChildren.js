import { Children } from "react";

export function forEachChildren(children, handler) {
  Children.forEach(children, (child) => {
    if (child && child.props) {
      const { children } = child.props;

      handler(child);
      if (Children.count(children) !== 0) {
        forEachChildren(children, handler);
      }
    }
  });
}
