import { QRing } from "./q-ring";
import { Rect2 } from "./rect2";
import { Square2 } from "./square2";

const format = new Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 });

const p = 1009n;
const q = 4999n;
const m = p * q;

const ring = new QRing(p * q);
const sqr2 = new Square2(ring, ring.inv(2n), ring.inv(2n));

function gen(a: bigint, b: bigint, c: bigint) {
  const rect = r2(a, b, c);
  let r = rect;

  console.log(a, b, c);
  for (let i = 1n; i <= m + 1n; i += 1n) {
    console.log(
      format.format(i),
      r,
      r.x2(),
      r.y2(),
      [r.x2() % p, r.y2() % p],
      [r.x2() % q, r.y2() % q],
    );
    r = r.mul(rect);
  }
  console.log();
}

function r2(a: bigint, b: bigint, c: bigint) {
  return new Rect2(new Square2(ring, ring.div(a, c), ring.div(b, c)).mul(sqr2));
}

gen(3n, 4n, 5n);
// gen(5n, 12n, 13n);
// gen(8n, 15n, 17n);
// gen(7n, 24n, 25n);
// gen(20n, 21n, 29n);
// gen(12n, 35n, 37n);
// gen(9n, 40n, 41n);
// gen(28n, 45n, 53n);
// gen(11n, 60n, 61n);
// gen(16n, 63n, 65n);
// gen(33n, 56n, 65n);
// gen(48n, 55n, 73n);
// gen(13n, 84n, 85n);
// gen(36n, 77n, 85n);
// gen(39n, 80n, 89n);
// gen(65n, 72n, 97n);
