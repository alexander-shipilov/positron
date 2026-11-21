import { expect, it, jest } from "@jest/globals";

import type { ErrorClass } from "../error/error-class";
import type { ErrorLike } from "../error/error-like";
import type { ErrorMessage } from "../error/error-message";
import type { never } from "../never/never";
import type { Optional } from "../utility/optional";
import { error } from "../error/error";
import { debug } from "../utility/debug";
import { template } from "../utility/template";

/**
 * The {@link neverLikeTests} function registers shared Jest assertions for
 * functions throwing errors compatible with {@link never}.
 *
 * @param neverLike - The assertion or throwing function under test.
 *
 * @param message - The default error message expected when omitted.
 *
 * @param ErrorClass - The default error constructor expected when omitted.
 *
 * @internal
 */
export function neverLikeTests(
  neverLike: (...args: Parameters<typeof never>) => unknown,
  message: ErrorMessage,
  ErrorClass: ErrorClass,
) {
  class TestError extends Error {}

  const testMessageFn = jest.fn<() => ErrorLike>();
  const testMessageString: ErrorMessage = "Test message";
  const testMessageError: ErrorMessage = new TestError(testMessageString);

  const err: Error = error(message, ErrorClass);

  const format = (name: string, message: Optional<string>) =>
    `new ${name}(${message ?? ""})`;

  it(
    template`
    should throw \`${0}\` if \`message\` and \`ErrorClass\` is omitted`(
      format(ErrorClass.name, debug(err.message)),
    ),
    () => {
      expect(() => neverLike()).toThrow(err);
    },
  );

  it(
    template`
    should throw \`${0}\` if \`message\` is a string`(
      format(ErrorClass.name, "message"),
    ),
    () => {
      expect(() => neverLike(testMessageString)).toThrow(
        error(testMessageString, ErrorClass),
      );
    },
  );

  it(
    template`
    should throw \`${0}\` if \`message\` is a function which returns a string
    or \`undefined\``(format(ErrorClass.name, "message()")),
    () => {
      expect(() => neverLike(testMessageFn.mockReturnValue(undefined))) //
        .toThrow(error(undefined, ErrorClass));
      expect(() => neverLike(testMessageFn.mockReturnValue(testMessageString))) //
        .toThrow(error(testMessageString, ErrorClass));
    },
  );

  it(
    template`
    should throw \`${0}\` if \`message\` is \`undefined\` and \`ErrorClass\`
    passed`(format("ErrorClass", debug(err.message))),
    () => {
      expect(() => neverLike(undefined, TestError)) //
        .toThrow(error(message, TestError));
    },
  );

  it(
    template`
    should throw \`${0}\`, if \`message\` is a string and \`ErrorClass\`
    passed`(format("ErrorClass", "message")),
    () => {
      expect(() => neverLike(testMessageString, TestError)) //
        .toThrow(error(testMessageString, TestError));
    },
  );

  it(
    template`
    should throw \`${0}\` if \`ErrorClass\` passed and \`message\` is a
    function which returns a string or \`undefined\``(
      format("ErrorClass", "message()"),
    ),
    () => {
      expect(() =>
        neverLike(testMessageFn.mockReturnValue(undefined), TestError),
      ).toThrow(error(undefined, TestError));

      expect(() =>
        neverLike(testMessageFn.mockReturnValue(testMessageString), TestError),
      ).toThrow(error(testMessageString, TestError));
    },
  );

  it(
    template`
    should throw \`message\` if \`message\` is an instance of \`Error\``(),
    () => {
      expect(() => neverLike(testMessageError)) //
        .toThrow(testMessageError);
    },
  );

  it(
    template`
    should throw \`message()\` if \`message\` is a function which returns an
    instance of error`(),
    () => {
      expect(() => neverLike(testMessageFn.mockReturnValue(testMessageError))) //
        .toThrow(testMessageError);
    },
  );
}
