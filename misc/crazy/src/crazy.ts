import * as fs from "node:fs/promises";
import { dirname } from "path";
import Progress from "ts-progress";
import { fileURLToPath } from "url";

import { isBigint, isUndefined } from "@positron/core";

import type { Entity } from "./entity";
import { BigintMath } from "./algebra";
import { B512, isB512Int } from "./bigint";
import { AlgebraCalculator, CachingCalculator } from "./calculator";
import { DefaultCreator } from "./creator";
import { DefaultFormatter } from "./formatter";
import { PseudoGenerator } from "./generator";
import { Natural } from "./number";
import { CalculatorResolver } from "./resolver";

const generator = new PseudoGenerator(DefaultCreator);
const resolver = new CalculatorResolver(
  new CachingCalculator(
    new AlgebraCalculator(new BigintMath(B512, isB512Int)),
    new WeakMap(),
  ),
);
const formatter = DefaultFormatter;

const digits = [
  Natural(1),
  Natural(2),
  Natural(3),
  Natural(4),
  Natural(5),
  Natural(6),
  Natural(7),
  Natural(8),
  Natural(9),
] as const;

const progress = Progress.create({
  pattern:
    "Progress: {bar} {current} / {total} | Remaining: {remaining} | Elapsed: {elapsed} ",
  total: 64_477_920_386,
  updateFrequency: 1000,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const out = `${__dirname}/../../../../out/bigint/`;

await fs.rm(out, { force: true, recursive: true });
await fs.mkdir(out, { recursive: true });

const results = new Map<bigint, Entity[]>();

function add(result: bigint, entity: Entity) {
  let arr = results.get(result);

  if (isUndefined(arr)) {
    results.set(result, (arr = []));
  }

  arr.push(entity);
}

async function flush() {
  for (const [result, entities] of results.entries()) {
    await fs.appendFile(
      `${out}/${result.toString()}.txt`,
      entities.map((entity) => formatter.format(entity) + "\n").join(""),
    );
  }

  results.clear();
}

let count = 0;
let resolved = 0;

for (const entity of generator.generate(digits)) {
  const result = resolver.resolve(entity);

  if (isBigint(result) && result >= 0n && result <= 11111n) {
    resolved++;
    add(result, entity);
  }

  progress.update();
  count++;

  if (count % 1_000_000 === 0) {
    await flush();
  }
}

await flush();

console.log(`Resolved: ${new Intl.NumberFormat("en-US").format(resolved)}`);
