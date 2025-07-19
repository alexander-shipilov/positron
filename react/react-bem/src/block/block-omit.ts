import type { OmitDescriptors } from "../descriptor";

import type { BlockProps } from "./block-props";

export type BlockOmit<TProps> = Omit<OmitDescriptors<TProps>, keyof BlockProps>;
