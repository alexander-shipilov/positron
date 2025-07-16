import { Element } from "../element/Element";
import { AssignedSlot } from "./AssignedSlot";
import { assignedSlot, manualSlotAssignment } from "./Slottable.symbols";

/**
 * https://dom.spec.whatwg.org/#concept-slotable
 */
export interface Slottable {
  /**
   * https://dom.spec.whatwg.org/#slotable-assigned-slot
   *
   * A [slottable] has an associated [assigned slot] (null or a [slot]). Unless
   * stated otherwise it is `null`. A [slottable] is [assigned] if its
   * [assigned slot] is non-null.
   */
  [assignedSlot]: AssignedSlot;

  /**
   * https://dom.spec.whatwg.org/#slottable-manual-slot-assignment
   *
   * A [slottable] has an associated [manual slot assignment]
   * (`null` or a [slot]). Unless stated otherwise, it is `null`.
   */
  [manualSlotAssignment]: Element | null;

  /**
   * https://dom.spec.whatwg.org/#slotable-name
   *
   * A [slottable] has an associated [name] (a string). Unless stated
   * otherwise it is the empty string.
   */
  name: string;
}
