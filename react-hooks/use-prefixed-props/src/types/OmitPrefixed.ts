import { Prefix } from "./Prefix";

/**
 * Удаляет свойства объекта O с префиксом P
 */
export type OmitPrefixed<P extends string, T> = {
  [K in keyof T as K extends string & Prefix<P, K> ? never : K]: T[K];
};
