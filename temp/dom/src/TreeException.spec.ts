import { TreeException } from "./TreeException";
import { TreeExceptionNameEnum } from "./TreeExceptionName.enum";

describe("TreeException", () => {
  describe(".constructor(message, name)", () => {
    const exception = new TreeException(
      "Test message",
      TreeExceptionNameEnum.NotFoundError
    );

    it("should create an instance of `Error`", () => {
      expectType(exception).toBeInstanceOf(Error);
    });

    it("should set `message` and `name` properties", () => {
      expectType(exception.message).toBe("Test message");
      expectType(exception.name).toBe(TreeExceptionNameEnum.NotFoundError);
    });
  });
});
