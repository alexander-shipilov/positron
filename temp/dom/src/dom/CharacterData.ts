import { List } from "./List";
import { Node } from "./node/Node";

export abstract class CharacterData extends Node {
  abstract cloningSteps: List<any>;

  abstract data: string;
}
