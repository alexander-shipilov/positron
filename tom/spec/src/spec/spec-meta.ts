import type { KeyOf, Optional } from "@positron/lang";
import { assertEqual, assertType, isFunction, isSymbol } from "@positron/lang";

import { toIdentifier } from "../identifier";
import { toParamTokens } from "../param";

import type { SpecClass } from "./spec-class";
import type { SpecKeyIndex } from "./spec-key-index";
import type { SpecMetaKey } from "./spec-meta-key";
import { SpecFormatter } from "./spec-formatter";
import { SpecKey } from "./spec-key";

import "reflect-metadata";

/**
 * The {@link SpecMeta} class provide utility functions to describe
 * specifications.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SpecMeta {
  /**
   * The {@link SpecMeta.description} static data property represents the
   * metadata property to save description
   */
  public static readonly description = Symbol("description");

  public static class(name: string, ...typeParams: string[]) {
    return this.describeObject<SpecClass>(() =>
      SpecFormatter.class(toIdentifier(name), toParamTokens(typeParams)),
    );
  }

  public static describeObject<TTarget extends object = object>(
    description: ((target: TTarget) => string) | string,
  ): (target: TTarget) => void {
    return (target: TTarget) => {
      Reflect.defineMetadata(
        SpecMeta.description,
        isFunction(description) ? description(target) : description,
        target,
      );
    };
  }

  /**
   * The {@link SpecMeta.describeProperty} decorator defines the passed
   * `description` to the property or method. If description is a function,
   * then it will be called with property key and value.
   *
   * @example
   * ```ts
   *  class ArrayTests implements SpecTests<unknown[]> {
   *    // ...
   *
   *    @SpecMeta.description('Array#indexOf(item)')
   *    public indexOf = (create: () => unknown[]) => {
   *      it('should return the index of the passed `item` or -1', () => {
   *        expect(create().indexOf()).toBe(-1);
   *      })
   *    }
   *
   *    // ...
   *  }
   * ```
   *
   * @param description - Description
   */
  public static describeProperty<TKey extends SpecMetaKey>(
    description: ((key: TKey) => string) | string,
  ): <TTarget extends object>(
    target: TTarget,
    key: KeyOf<TTarget, TKey>,
  ) => void {
    return <TTarget extends object>(
      target: TTarget,
      key: KeyOf<TTarget, TKey>,
    ) => {
      Reflect.defineMetadata(
        SpecMeta.description,
        isFunction(description) ? description(key) : description,
        target,
        key,
      );
    };
  }

  public static function(name: string, ...args: string[]) {
    return this.describeProperty(() =>
      SpecFormatter.function(toIdentifier(name), toParamTokens(args)),
    );
  }

  /**
   * The {@link SpecMeta.getProperty} returns the description associated with
   * the provided `key` on the `target` object.
   *
   * @param target - The target object on which to define metadata.
   */
  public static getClass(target: SpecClass): string {
    const description = Reflect.getMetadata(
      SpecMeta.description,
      target,
    ) as Optional<string>;

    return description ?? target.name;
  }

  /**
   * The {@link SpecMeta.getProperty} returns the description associated with
   * the provided `key` on the `target` object.
   *
   * @param target - The target object on which to define metadata.
   *
   * @param key - The property key for the target.
   */
  public static getProperty(target: object, key: SpecMetaKey): string {
    const description = Reflect.getMetadata(
      SpecMeta.description,
      target,
      key,
    ) as Optional<string>;

    return description ?? SpecFormatter.property(key);
  }

  /**
   * The {@link SpecMeta.index} decorator defines the index property
   * description.
   *
   * @param name - Index name
   *
   * @example
   * ```ts
   *  class ArrayTests implements SpecTests<unknown[]> {
   *    // ...
   *
   *    @SpecMeta.index('n')
   *    public index = (create: () => unknown[]) => {
   *      it('should return an item at `n`-th position', () => {
   *        expect(create()[0]).toBeUndefined()
   *      })
   *    }
   *
   *    // ...
   *  }
   * ```
   */
  public static index(name: string = "index") {
    return this.describeProperty((key: SpecKeyIndex) => {
      assertType(key, isSymbol);

      return SpecFormatter.index(toIdentifier(name));
    });
  }

  public static interface(name: string, ...typeParams: string[]) {
    return this.describeObject<SpecClass>(() =>
      SpecFormatter.interface(toIdentifier(name), toParamTokens(typeParams)),
    );
  }

  /**
   * The {@link SpecMeta.method} decorator defines the method description.
   *
   * @example
   * ```ts
   *  class ArrayTests implements SpecTests<unknown[]> {
   *    // ...
   *
   *    @SpecMeta.method('searchElement', 'fromIndex?')
   *    public indexOf = (create: () => unknown[]) => {
   *      it('should return the index of the passed `item` or -1', () => {
   *        const arr = create();
   *
   *        expect(arr.indexOf(1)).toBe(-1)
   *      })
   *    }
   *
   *    // ...
   *  }
   * ```
   *
   * @param args - Method arguments
   */
  public static method(...args: string[]) {
    return this.describeProperty((key: SpecMetaKey) =>
      SpecFormatter.method(key, toParamTokens(args)),
    );
  }

  /**
   * The {@link SpecMeta.index} decorator defines the index property
   * description.
   *
   * @example
   * ```ts
   *  interface Instance {
   *    name: string;
   *  }
   *
   *  interface InstanceClass {
   *    new (name: string): Instance;
   *  }
   *
   *  type InstanceClassTestsArgs = [Class: InstanceClass];
   *
   *  class InstanceClassTests
   *    extends SpecTestsClass<ClassTestsArgs>
   *    implements SpecTests<InstanceClass, ClassTestsArgs>
   *  {
   *    // ...
   *
   *    @SpecMeta.new("name")
   *    public [SpecKey.New] = (env: SpecEnv, Class: InstanceClass) => {
   *      it("should create an `Instance` object with provided `name`", () => {
   *        expect(new Class("foo").name).toBe("foo");
   *      });
   *    };
   *
   *    // ...
   *  }
   * ```
   *
   * @param args - The list of arguments
   */
  public static new(...args: string[]) {
    return this.describeProperty((key: SpecKey["New"]) => {
      assertEqual(key, SpecKey.New);

      return SpecFormatter.new(toParamTokens(args));
    });
  }

  /**
   * The {@link SpecMeta.property} decorator defines the property description.
   *
   * @param value - Value
   *
   * @example
   * ```ts
   *  class ArrayTests implements SpecTests<unknown[]> {
   *    // ...
   *
   *    @SpecMeta.property()
   *    public indexOf = (create: () => unknown[]) => {
   *      it('should return the index of the passed `item` or -1', () => {
   *        expect(create().length).toBe(0)
   *      })
   *    }
   *
   *    // ...
   *  }
   * ```
   */
  public static property(value?: unknown) {
    return this.describeProperty((key) => SpecFormatter.property(key, value));
  }
}
