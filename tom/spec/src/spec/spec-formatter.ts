import { debug, isSymbol, isUndefined } from "@positron/lang";

import { isIdentifier } from "../identifier";

import type { SpecMetaKey } from "./spec-meta-key";

/**
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SpecFormatter {
  public static class(name: string, params: string[] = []) {
    return `class ${this.typed(name, params)}`;
  }

  public static function(name: string, params: string[] = []) {
    return `function ${this.callable(name, params)}`;
  }

  /**
   *
   * @param key -
   */
  public static index(key: string): string {
    return this.indexKey(key);
  }

  /**
   *
   * @param key -
   */
  public static indexKey(key: string): string {
    return `[${key}]`;
  }

  public static interface(name: string, params: string[] = []) {
    return `interface ${this.typed(name, params)}`;
  }

  /**
   *
   * @param key -
   */
  public static key(key: SpecMetaKey): string {
    return isSymbol(key) ? this.symbolKey(key) : this.namedKey(key);
  }

  /**
   *
   * @param key -
   *
   * @param params -
   */
  public static method(key: SpecMetaKey, params: string[] = []): string {
    return this.callable(this.key(key), params);
  }

  /**
   * @param key -
   */
  public static namedKey(key: string): string {
    return isIdentifier(key) ? `.${key}` : this.indexKey(debug(key));
  }

  /**
   *
   * @param params -
   */
  public static new(params: string[] = []): string {
    return `new (${params.join(", ")})`;
  }

  /**
   *
   * @param key -
   *
   * @param value -
   */
  public static property(key: SpecMetaKey, value?: unknown): string {
    return `${this.key(key)}${isUndefined(value) ? "" : ` = ${debug(value)}`}`;
  }

  /**
   * @param key -
   */
  public static symbolKey(key: symbol): string {
    return this.indexKey(debug(key));
  }

  protected static callable(name: string, params: string[] = []) {
    return `${name}(${params.join(", ")})`;
  }

  protected static typed(name: string, params: string[] = []) {
    return name + (params.length ? `<${params.join(", ")}>` : "");
  }
}
