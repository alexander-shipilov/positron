// @flow

import { Listener } from "./Listener";
import { Publisher } from "./Publisher";
import type { PublisherListener } from "./Publisher";

export function listen<T>(publisher: Publisher, handler: PublisherListener<T>): Listener<T> {
    return new Listener(publisher, handler);
}
