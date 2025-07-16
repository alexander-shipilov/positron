import type { Optional } from "@positron/lang";

import { isString } from "@positron/lang";

import type { SpecKey } from "./spec-key";

import "reflect-metadata";

const $description = Symbol("description");

export function defineMethod(target: object, key: SpecKey, args: string[]) {
  return setDescription(target, key, formatMethod(key, args));
}

export function formatKey(key: SpecKey): string {
  return isString(key) ? key : `[${key.toString()}]`;
}

export function formatMethod(key: SpecKey, args: string[]): string {
  return `${formatKey(key)}(${args.join(", ")})`;
}

export function getDescription(target: object, key: SpecKey): string {
  const description = Reflect.getMetadata(
    $description,
    target,
    key,
  ) as Optional<string>;

  return description ?? formatKey(key);
}

export function setDescription(
  target: object,
  key: SpecKey,
  description: string,
) {
  Reflect.defineMetadata($description, description, target, key);
}
