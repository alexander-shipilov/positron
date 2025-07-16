import { CharacterData } from "./CharacterData";

export abstract class ProcessingInstruction extends CharacterData {
  abstract target: unknown;
}
