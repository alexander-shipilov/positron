import { describe, expect, it } from "@jest/globals";

import { div, pow, mul, neg, sub, operand, add } from "../@fixtures";
import { EntityType } from "../core";
import { CommonCreator } from "../creators";

import { PostfixSerializer } from "./postfix-serializer";

describe(PostfixSerializer.name, () => {
  const serializer = new PostfixSerializer(CommonCreator);

  describe(`#${serializer.serialize.name}(entity)`, () => {
    it("should serialize operand", () => {
      expect(serializer.serialize(operand(1))).toEqual([[1]]);
      expect(serializer.serialize(operand(12))).toEqual([[12]]);
    });

    it("should serialize unary operations", () => {
      expect(serializer.serialize(neg(1))).toEqual([[1], EntityType.Neg]);
    });

    it("should serialize binary operations", () => {
      expect(serializer.serialize(add(1, 2))).toEqual([
        [1],
        [2],
        EntityType.Add,
      ]);
      expect(serializer.serialize(div(1, 2))).toEqual([
        [1],
        [2],
        EntityType.Div,
      ]);
      expect(serializer.serialize(pow(1, 2))).toEqual([
        [1],
        [2],
        EntityType.Pow,
      ]);
      expect(serializer.serialize(mul(1, 2))).toEqual([
        [1],
        [2],
        EntityType.Mul,
      ]);
      expect(serializer.serialize(sub(1, 2))).toEqual([
        [1],
        [2],
        EntityType.Sub,
      ]);
    });

    it("should serialize nested operations", () => {
      expect(serializer.serialize(pow(mul(add(1, 2), 3), neg(4)))).toEqual([
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

  describe(`#${serializer.deserialize.name}(data)`, () => {
    it("should deserialize operand", () => {
      expect(serializer.deserialize(serializer.serialize(operand(1)))).toEqual(
        operand(1),
      );
    });

    it("should deserialize unary operations", () => {
      expect(serializer.deserialize(serializer.serialize(neg(1)))).toEqual(
        neg(1),
      );
    });

    it("should deserialize binary operations", () => {
      expect(serializer.deserialize(serializer.serialize(add(1, 2)))).toEqual(
        add(1, 2),
      );
      expect(serializer.deserialize(serializer.serialize(div(1, 2)))).toEqual(
        div(1, 2),
      );
      expect(serializer.deserialize(serializer.serialize(pow(1, 2)))).toEqual(
        pow(1, 2),
      );
      expect(serializer.deserialize(serializer.serialize(mul(1, 2)))).toEqual(
        mul(1, 2),
      );
      expect(serializer.deserialize(serializer.serialize(sub(1, 2)))).toEqual(
        sub(1, 2),
      );
    });

    it("should deserialize nested operations", () => {
      expect(
        serializer.deserialize(
          serializer.serialize(pow(mul(add(1, 2), 3), neg(4))),
        ),
      ).toEqual(pow(mul(add(1, 2), 3), neg(4)));
    });

    it("should throw `SyntaxError` if data is invalid", () => {
      expect(() => serializer.deserialize([])).toThrow(
        new SyntaxError("Invalid input"),
      );
      expect(() => serializer.deserialize([[1], [2]])).toThrow(
        new SyntaxError("Invalid input"),
      );
      expect(() => serializer.deserialize([-100])).toThrow(
        new SyntaxError("Invalid token"),
      );
      expect(() => serializer.deserialize([EntityType.Neg])).toThrow(
        new SyntaxError("Missed arg"),
      );
      expect(() => serializer.deserialize([EntityType.Add])).toThrow(
        new SyntaxError("Missed arg"),
      );
      expect(() => serializer.deserialize([[1], EntityType.Add])).toThrow(
        new SyntaxError("Missed arg"),
      );
    });
  });
});
