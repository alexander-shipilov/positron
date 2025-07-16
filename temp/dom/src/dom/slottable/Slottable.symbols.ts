export const assignedSlot = Symbol("assigned slot");

/**
 * https://dom.spec.whatwg.org/#slottable-manual-slot-assignment
 *
 * A [slottable] has an associated [manual slot assignment]
 * (`null` or a [slot]).
 */
export const manualSlotAssignment = Symbol("manual slot assignment");
