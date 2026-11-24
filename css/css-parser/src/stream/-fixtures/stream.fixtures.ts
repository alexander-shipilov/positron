import { jest } from "@jest/globals";

import type { StreamElement } from "../stream-element";
import type { StreamNext } from "../stream-next";

export function createNext<TElement extends StreamElement>(
  elements: readonly TElement[],
): jest.Mock<StreamNext<TElement>> {
  let index = 0;

  return jest.fn<StreamNext<TElement>>(() => {
    const element = elements[index] ?? null;

    if (index < elements.length) {
      index += 1;
    }

    return element;
  });
}
