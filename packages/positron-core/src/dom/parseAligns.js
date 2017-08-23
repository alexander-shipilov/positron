// @flow

import type { AlignProps } from "./dom-rect";

const ALIGNS = {
    "l": "left",
    "r": "right",
    "t": "top",
    "b": "bottom",
    "c": "center",
    "h": "horizontal",
    "v": "vertical"
};

export function parseAligns(props: string): AlignProps {
    return props.split(/\s*\|\s*/).map((aligns) => {
        return Object.assign({}, ...aligns.split(/\s+/).map((align) => {
            const match = align.match(/^[lcr]{2}|[tcbvh]{2}$/);

            if (!match) {
                throw new Error("Invalid align");
            }

            return { [ALIGNS[match[0].charAt(0)]]: ALIGNS[match[0].charAt(1)] };
        }));
    });
}
