import { describe, expect, it } from "@jest/globals";

import { add, div, mul, neg, operand, pow, sub } from "../../@fixtures";
import { EntityType } from "../../entity";

import { PostfixSerializer } from "./postfix-serializer";

describe("PostfixSerializer", () => {
  describe(`#serialize(entity)`, () => {
    it("should serialize operand", () => {
      expect(PostfixSerializer.serialize(operand(1))).toEqual([[1]]);
      expect(PostfixSerializer.serialize(operand(12))).toEqual([[12]]);
    });

    it("should serialize unary operations", () => {
      expect(PostfixSerializer.serialize(neg(1))).toEqual([
        [1],
        EntityType.Neg,
      ]);
    });

    it("should serialize binary operations", () => {
      expect(PostfixSerializer.serialize(add(1, 2))).toEqual([
        [1],
        [2],
        EntityType.Add,
      ]);
      expect(PostfixSerializer.serialize(div(1, 2))).toEqual([
        [1],
        [2],
        EntityType.Div,
      ]);
      expect(PostfixSerializer.serialize(pow(1, 2))).toEqual([
        [1],
        [2],
        EntityType.Pow,
      ]);
      expect(PostfixSerializer.serialize(mul(1, 2))).toEqual([
        [1],
        [2],
        EntityType.Mul,
      ]);
      expect(PostfixSerializer.serialize(sub(1, 2))).toEqual([
        [1],
        [2],
        EntityType.Sub,
      ]);
    });

    it("should serialize nested operations", () => {
      expect(
        PostfixSerializer.serialize(pow(mul(add(1, 2), 3), neg(4))),
      ).toEqual([
        [1],
        [2],
        EntityType.Add,
        [3],
        EntityType.Mul,
        [4],
        EntityType.Neg,
        EntityType.Pow,
      ]);
    });
  });

  describe(`#${PostfixSerializer.deserialize.name}(data)`, () => {
    it("should deserialize operand", () => {
      expect(
        PostfixSerializer.deserialize(PostfixSerializer.serialize(operand(1))),
      ).toEqual(operand(1));
    });

    it("should deserialize unary operations", () => {
      expect(
        PostfixSerializer.deserialize(PostfixSerializer.serialize(neg(1))),
      ).toEqual(neg(1));
    });

    it("should deserialize binary operations", () => {
      expect(
        PostfixSerializer.deserialize(PostfixSerializer.serialize(add(1, 2))),
      ).toEqual(add(1, 2));
      expect(
        PostfixSerializer.deserialize(PostfixSerializer.serialize(div(1, 2))),
      ).toEqual(div(1, 2));
      expect(
        PostfixSerializer.deserialize(PostfixSerializer.serialize(pow(1, 2))),
      ).toEqual(pow(1, 2));
      expect(
        PostfixSerializer.deserialize(PostfixSerializer.serialize(mul(1, 2))),
      ).toEqual(mul(1, 2));
      expect(
        PostfixSerializer.deserialize(PostfixSerializer.serialize(sub(1, 2))),
      ).toEqual(sub(1, 2));
    });

    it("should deserialize nested operations", () => {
      expect(
        PostfixSerializer.deserialize(
          PostfixSerializer.serialize(pow(mul(add(1, 2), 3), neg(4))),
        ),
      ).toEqual(pow(mul(add(1, 2), 3), neg(4)));
    });

    it("should throw `SyntaxError` if data is invalid", () => {
      expect(() => PostfixSerializer.deserialize([])).toThrow(
        new SyntaxError("Invalid input"),
      );
      expect(() => PostfixSerializer.deserialize([[1], [2]])).toThrow(
        new SyntaxError("Invalid input"),
      );
      expect(() => PostfixSerializer.deserialize([-100])).toThrow(
        new SyntaxError("Invalid token"),
      );
      expect(() => PostfixSerializer.deserialize([EntityType.Neg])).toThrow(
        new SyntaxError("Missed arg"),
      );
      expect(() => PostfixSerializer.deserialize([EntityType.Add])).toThrow(
        new SyntaxError("Missed arg"),
      );
      expect(() =>
        PostfixSerializer.deserialize([[1], EntityType.Add]),
      ).toThrow(new SyntaxError("Missed arg"));
    });
  });
});
