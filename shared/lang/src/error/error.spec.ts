import { describe, expect, it, jest } from "@jest/globals";

import type { Optional } from "../utility/optional";
import { template } from "../utility/template";

import type { ErrorLike } from "./error-like";
import type { ErrorMessage } from "./error-message";
import { error } from "./error";

describe(`function ${error.name}(message?, ErrorClass?)`, () => {
  class TestError extends Error {}

  const ErrorClass = Error;

  const messageFn = jest.fn<() => ErrorLike>();
  const messageString: ErrorMessage = "Test message";
  const messageError: ErrorMessage = new TestError(messageString);

  const format = (name: string, message: Optional<string>) =>
    `new ${name}(${message ?? ""})`;

  it(
    template`
    should return \`${0}\` if \`message\` and \`ErrorClass\` is omitted`(
      format(Error.name, ""),
    ),
    () => {
      expect(error()).toEqual(new ErrorClass());
    },
  );

  it(
    template`
    should return \`${0}\` if \`message\` is a string`(
      format(ErrorClass.name, "message"),
    ),
    () => {
      expect(error(messageString)).toEqual(new ErrorClass(messageString));
    },
  );

  it(
    template`
    should return \`${0}\` if \`message\` is a function which returns a string 
    or \`undefined\``(format(ErrorClass.name, "message()")),
    () => {
      expect(error(messageFn.mockReturnValue(undefined))) //
        .toEqual(new ErrorClass(undefined));
      expect(error(messageFn.mockReturnValue(messageString))) //
        .toEqual(new ErrorClass(messageString));
    },
  );

  it(
    template`
    should return \`${0}\` if \`message\` is \`undefined\` and \`ErrorClass\`
    passed`(format("ErrorClass", undefined)),
    () => {
      expect(error(undefined, TestError)) //
        .toEqual(new TestError(undefined));
    },
  );

  it(
    template`
    should return \`${0}\`, if \`message\` is a string and \`ErrorClass\`
    passed`(format("ErrorClass", "message")),
    () => {
      expect(error(messageString, TestError)) //
        .toEqual(new TestError(messageString));
    },
  );

  it(
    template`
    should return \`${0}\` if \`ErrorClass\` passed and \`message\` is a 
    function which returns a string or \`undefined\``(
      format("ErrorClass", "message()"),
    ),
    () => {
      expect(error(messageFn.mockReturnValue(undefined), TestError)) //
        .toEqual(new TestError(undefined));

      expect(error(messageFn.mockReturnValue(messageString), TestError)) //
        .toEqual(new TestError(messageString));
    },
  );

  it(
    template`
    should return \`message\` if \`message\` is an instance of \`Error\``(),
    () => {
      expect(error(messageError)) //
        .toEqual(messageError);
    },
  );

  it(
    template`
    should return \`message()\` if \`message\` is a function which returns an
    instance of error`(),
    () => {
      expect(error(messageFn.mockReturnValue(messageError))) //
        .toEqual(messageError);
    },
  );
});
