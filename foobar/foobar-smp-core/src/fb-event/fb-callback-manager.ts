import type { Optional } from "@positron/core";
import { global } from "@positron/foobar-smp";

import { Emitter } from "../emitter";

import type { FbCallbackListeners } from "./fb-callback-listeners";
import { fbEventCallbackName } from "./fb-callback-name";

const $instance = Symbol("instance");

/**
 * The {@link FbCallbackManager} singleton class add subscriptions to foobar
 * events.
 *
 * @public
 */
export class FbCallbackManager {
  private static [$instance]: Optional<FbCallbackManager>;

  /**
   * @internal
   */
  declare private emitter: Emitter<FbCallbackListeners>;

  /**
   * The {@link FbCallbackManager."instance"} static property returns an
   * instance of {@link FbCallbackManager}.
   */
  public static get instance(): FbCallbackManager {
    return this[$instance] ?? (this[$instance] = new FbCallbackManager());
  }

  private constructor() {
    this.emitter = new Emitter();
  }

  /**
   * {@inheritDoc Emitter.off}
   */
  public off<TName extends keyof FbCallbackListeners>(
    eventName: TName,
    listener: FbCallbackListeners[TName],
  ) {
    const { emitter } = this;

    emitter.off(eventName, listener);

    if (emitter.listenerCount(eventName) === 0) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete global[fbEventCallbackName(eventName)];
    }

    return this;
  }

  /**
   * {@inheritDoc Emitter.on}
   */
  public on<TName extends keyof FbCallbackListeners>(
    eventName: TName,
    listener: FbCallbackListeners[TName],
  ): this {
    const callbackName = fbEventCallbackName(eventName);
    const { emitter } = this;

    if (!global[callbackName]) {
      Object.assign(global, {
        [callbackName]: (...args: Parameters<FbCallbackListeners[TName]>) =>
          emitter.emit(eventName, ...args),
      });
    }

    emitter.on(eventName, listener);

    return this;
  }
}
