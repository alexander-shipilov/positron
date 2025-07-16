import type { Primitive } from "@positron/lang";

export type ListItem = Exclude<Primitive, undefined> | object;
