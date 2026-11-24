import type { LookaheadStream } from "../stream/lookahead-stream";

import type { Token } from "./token";

/**
 * @public
 */
export type TokenStream = LookaheadStream<Token>;
