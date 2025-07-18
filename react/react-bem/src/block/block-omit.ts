import type { DescriptorOmit } from "../descriptor";

import type { BlockProps } from "./block-props";

export type BlockOmit<TProps> = Omit<DescriptorOmit<TProps>, keyof BlockProps>;
