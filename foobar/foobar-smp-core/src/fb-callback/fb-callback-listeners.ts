import type { FbCallbacks } from "@positron/foobar-smp";

import type { FbCallbackName } from "./fb-callback-name";

/**
 * @public
 */
export type FbCallbackListeners = {
  [TKey in keyof FbCallbacks as TKey extends FbCallbackName<infer Type>
    ? Type
    : never]: FbCallbacks[TKey];
};
