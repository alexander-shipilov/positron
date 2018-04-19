// @flow

import type { AlignProps, AlignTargetSide } from "./rect";

const ALIGNS: { [string]: AlignTargetSide } = {
    "l": "left",
    "r": "right",
    "t": "top",
    "b": "bottom",
    "c": "center",
    "h": "horizontal",
    "v": "vertical"
};

export function parseAlign(align: string): AlignProps {
    return Object.assign({}, ...align.split(/\s+/).map((align) => {
        const match = align.match(/^[lrtbc]{2}|c[vh]$/);

        if (!match) {
            throw new Error("Invalid align");
        }

        return { [ALIGNS[match[0].charAt(0)]]: ALIGNS[match[0].charAt(1)] };
    }));
}
