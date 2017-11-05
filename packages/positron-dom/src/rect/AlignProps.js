// @flow

type HorizontalSide = "left" | "right" | "center";
type VerticalSide = "top" | "bottom" | "center";

export type AlignSide = HorizontalSide | VerticalSide;
export type AlignTargetSide = AlignSide | "vertical" | "horizontal";

export type AlignProps = {
    left?: HorizontalSide,
    top?: VerticalSide,
    right?: HorizontalSide,
    bottom?: VerticalSide,
    center?: AlignTargetSide
};
