import { CharacterData } from "../CharacterData";
import type { Element } from "../element/Element";
import { AssignedSlot } from "../slottable/AssignedSlot";
import type { Slottable } from "../slottable/Slottable";
import {
  assignedSlot,
  manualSlotAssignment,
} from "../slottable/Slottable.symbols";

export abstract class Text extends CharacterData implements Slottable {
  abstract [assignedSlot]: AssignedSlot;

  abstract [manualSlotAssignment]: Element | null;

  abstract name: string;
}
