import React from "react";
import {
  ElementProps,
  ElementTag,
  ElementTagProps,
  ElementTarget,
  FragmentProps,
} from "../types";

/**
 * Element component
 */
export function Element<
  Tag extends ElementTag,
  Props extends ElementTagProps<Tag> = ElementTagProps<Tag>,
  Target extends ElementTarget<Tag> = ElementTarget<Tag>
>(props: ElementProps<Tag, Props, Target>) {
  const { Element: ElementTag, elementRef, ...elementProps } = props;

  return ElementTag == null ? (
    <>{(elementProps as FragmentProps).children}</>
  ) : (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ElementTag {...elementProps} ref={elementRef} />
  );
}
