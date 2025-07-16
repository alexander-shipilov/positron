import { CharacterData } from "./CharacterData";
import type { Node } from "./node/Node";

export function isCharacterData(node: Node | null): node is CharacterData {
  return node instanceof CharacterData;
}
