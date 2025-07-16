import { assert } from "../assert";
import { BoundaryPoint } from "./BoundaryPoint";
import { BoundaryPointPosition } from "./BoundaryPointPosition";

/**
 * https://dom.spec.whatwg.org/#concept-range-bp-position
 *
 * The [position] of a [boundary point] (nodeA, offsetA) relative to a
 * [boundary point] (nodeB, offsetB) is "before", "equal", or "after", as
 * returned by these steps:
 */
export function position(
  [nodeA, offsetA]: BoundaryPoint,
  [nodeB, offsetB]: BoundaryPoint
): BoundaryPointPosition {
  // 1. Assert: `nodeA` and `nodeB` have the same root.
  assert(nodeA.parent === nodeB.parent);

  // 2. If `nodeA` is `nodeB`, then return "equal" if `offsetA` is `offsetB`,
  // before if offsetA is less than offsetB, and after if offsetA is greater
  // than offsetB.
  if (nodeA === nodeB) {
    return offsetA > offsetB
      ? BoundaryPointPosition.after
      : offsetA < offsetB
      ? BoundaryPointPosition.before
      : BoundaryPointPosition.equal;
  }

  // 3. If nodeA is following nodeB, then if the position of (nodeB, offsetB)
  // relative to (nodeA, offsetA) is before, return after, and if it is after,
  // return before.

  // 4. If nodeA is an ancestor of nodeB:

  // 4.1. Let child be nodeB.

  // 4.2. While child is not a child of nodeA, set child to its parent.

  // 4.3. If child’s index is less than offsetA, then return after.

  // 5. Return before.
  return BoundaryPointPosition.before;
}
