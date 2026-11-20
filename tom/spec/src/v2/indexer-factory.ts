import type { Indexer } from "./indexer";

export interface IndexerFactory {
  (): Indexer;
}
