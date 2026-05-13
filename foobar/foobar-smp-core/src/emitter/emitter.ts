import type { Optional } from "@positron/core";

import type { EmitterEventName } from "./emitter-event-name";
import type { EmitterListener } from "./emitter-listener";
import type { EmitterListeners } from "./emitter-listeners";

/**
 * @internal
 */
export const _listeners = Symbol("listeners");

/**
 * @public
 */
export class Emitter<
  TListeners extends EmitterListeners = Record<
    EmitterEventName,
    EmitterListener
  >,
> {
  /**
   * Internal listeners.
   *
   * @internal
   */
  private readonly [_listeners]: {
    [K in keyof TListeners]?: TListeners[K][];
  } = {};

  /**
   * The {@link Emitter.emit} synchronously calls each of the listeners
   * registered for the event named `eventName`, in the order they were
   * registered, passing the supplied arguments to each.
   *
   * @example
   * ```ts
   *  type Listeners = {
   *    event: (...args: number[]) => undefined
   *  }
   *
   *  const emitter = new Emitter<Listeners>();
   *
   *  // First listener
   *  emitter.on("event", () => {
   *    console.log("event in first listener");
   *  });
   *
   *  // Second listener
   *  emitter.on("event", (arg1: number, arg2: number) => {
   *    console.log(`event in second listener: ${arg1}, ${arg2}`);
   *  });
   *
   *  // Third listener
   *  emitter.on("event", (...args: number[]) => {
   *    console.log(`event in third listener: ${args.join(", ")} `);
   *  });
   *
   *  emitter.emit("event", 1, 2, 3, 4, 5);
   *  // >> event in first listener
   *  // >> event in second listener: 1, 2
   *  // >> event in third listener: 1, 2, 3, 4, 5
   * ```
   *
   * @param eventName - The name of the event to emit.
   * @param args - The callback arguments to pass to the registered listeners
   *   of event.
   */
  public emit<TName extends keyof TListeners>(
    eventName: TName,
    ...args: Parameters<TListeners[TName]>
  ): Optional<boolean> {
    let result: Optional<boolean> = undefined;

    if (this[_listeners][eventName]) {
      [...this[_listeners][eventName]].forEach((listener) => {
        result = listener(...args) || result;
      });
    }

    return result;
  }

  /**
   * The {@link Emitter.listenerCount} method returns the number of listeners
   * listening for the event named `eventName`. If `listener` is provided, it
   * will return how many times the `listener` is found in the list of the
   * listeners of the event.
   *
   * @param eventName - The name of the event being listened for.
   * @param listener - The event handler function.
   */
  public listenerCount<TName extends keyof TListeners>(
    eventName: TName,
    listener?: TListeners[TName],
  ): number {
    const { [eventName]: listeners = [] } = this[_listeners];
    let count = listeners.length;

    if (listener) {
      for (let i = 0; i < listeners.length; i++) {
        if (listeners[i] !== listener) {
          count--;
        }
      }
    }

    return count;
  }

  /**
   * The {@link Emitter.listeners} returns a copy of the array of listeners for
   * the event named `eventName`.
   *
   * @example
   * ```ts
   *  emitter.on('event', () => {
   *    console.log('event occurred');
   *  });
   *
   *  console.log(emitter.listeners('event'));
   *  // >> [Function]
   * ```
   *
   *  @param eventName - The name of the event.
   */
  public listeners<TName extends keyof TListeners>(
    eventName: TName,
  ): TListeners[TName][] {
    return [...(this[_listeners][eventName] ?? [])] as TListeners[TName][];
  }

  /**
   * The {@link Emitter.off} method removes the specified `listener` from the
   * listener array for the event named `eventName`.
   *
   * @example
   * ```ts
   *  const callback = () => {
   *    console.log('event occurred');
   *  };
   *
   *  emitter.on('event', callback);
   *  // ...
   *  emitter.off('event', callback);
   * ```
   *
   * @remarks
   * The {@link Emitter.off} method will remove, at most, one instance of a
   *   listener from the listener array. If any single listener has been added
   *   multiple times to the listener array for the specified `eventName`, then
   *   {@link Emitter.off} must be called multiple times to remove each
   *   instance.
   *
   * Once an event is emitted, all listeners attached to it at the time of
   *   emitting are called in order. This implies that any {@link Emitter.off}
   *   calls _after_ emitting and _before_ the last listener finishes execution
   *   will not remove them from {@link Emitter.emit} in progress. Subsequent
   *   events behave as expected.
   *
   * ```ts
   *  const emitter = new Emitter();
   *
   *  const callbackA = () => {
   *    console.log('A');
   *    emitter.off('event', callbackB);
   *  };
   *
   *  const callbackB = () => {
   *    console.log('B');
   *  };
   *
   *  emitter.on('event', callbackA);
   *  emitter.on('event', callbackB);
   *
   * // `callbackA` removes listener `callbackB` but it will still be called.
   * // Internal listener array at time of emit [`callbackA`, `callbackB`]
   *
   *  emitter.emit('event');
   *  // >> A
   *  // >> B
   *
   *  // `callbackB` is now removed.
   *  // Internal listener array [`callbackA`]
   *
   *  emitter.emit('event');
   *  // >> A
   * ```
   *
   * Because listeners are managed using an internal array, calling this will
   *   change the position indexes of any listener registered _after_ the
   *   listener being removed. This will not impact the order in which
   *   listeners are called, but it means that any copies of the listener array
   *   as returned by the {@link Emitter.listeners} method will need to be
   *   recreated.
   *
   * When a single function has been added as a handler multiple times for a
   *   single event (as in the example below), {@link Emitter.off} will remove
   *   the most recently added instance. In the example the last `on('ping')`
   *   listener is removed:
   *
   * ```ts
   *  const emitter = new EventEmitter();
   *
   *  function pong(): undefined {
   *    console.log('pong');
   *  }
   *
   *  emitter.on('ping', pong);
   *  emitter.on('ping', pong);
   *  emitter.off('ping', pong);
   *
   *  emitter.emit('ping');
   *  // >> pong
   * ```
   * @param eventName - The name of the event.
   * @param listener - The callback function to remove from the {@link Emitter}
   *   instance listeners.
   *
   * @returns a reference to the {@link Emitter}, so that calls can be chained.
   */
  public off<TName extends keyof TListeners>(
    eventName: TName,
    listener: TListeners[TName],
  ): this {
    const { [eventName]: listeners } = this[_listeners];

    if (listeners) {
      for (let index = listeners.length - 1; index >= 0; index--) {
        if (listeners[index] === listener) {
          listeners.splice(index, 1);
          break;
        }
      }

      if (listeners.length === 0) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this[_listeners][eventName];
      }
    }

    return this;
  }

  /**
   * The {@link Emitter.on} adds the `listener` function to the end of the
   * listeners array for the event named `eventName`.
   *
   * @remarks
   * No checks are made to see if the `listener` has already been added.
   *   Multiple calls passing the same combination of `eventName` and
   *   `listener` will result in the `listener` being added, and called,
   *   multiple times.
   *
   *  @example
   * ```ts
   *   const emitter = new Emitter();
   *
   *   emitter.on('foo', () => console.log('a'));
   *   emitter.on('foo', () => console.log('b'));
   *
   *   emitter.emit('foo');
   *   // >> a
   *   // >> b
   * ```
   *
   * @param eventName - The name of the event.
   * @param listener - The callback function to append to the {@link Emitter}
   *   instance listeners.
   *
   * @returns a reference to the current instance {@link Emitter}, so that
   *   calls can be chained.
   */
  public on<TName extends keyof TListeners>(
    eventName: TName,
    listener: TListeners[TName],
  ): this {
    let { [eventName]: listeners } = this[_listeners];

    if (!listeners) {
      Object.assign(this[_listeners], { [eventName]: (listeners = []) });
    }

    listeners.push(listener);

    return this;
  }
}
