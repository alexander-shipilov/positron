import { expect } from "@jest/globals";

import { assert, isKeyOf } from "@positron/lang";

import type { TomList } from "../../data/tom-list";

import { SpecInterface } from "./spec-interface";

const version = "1.0.0";

const TomList = new SpecInterface<unknown>();

const append = TomList.method("append");

const T = append.typeParam("T").extends`number[]`.default`number[]`;
const foo = append.param("foo?", T, 1);
const bars = append.param("...bars", code`${T}[]`);

append.returns`${foo} is ${T}`;

append.stage("alpha");
append.deprecated("1.2.3").desc`
This function is deprecated and will be removed next release.
Please use ${bars} instead`;

append.added(version);
append.remove("1.3.4");

append.desc`
The ${append} ${raw(append.type)} of the ${TomList} ${raw(append.type)} returns
an array of enumerable property keys found directly in a given ${foo}.`;

append.remarks`
Same-value-zero equality algorithm works like strict equality ${code`===`}
(where ${-0} and ${0} are considered equal), with the exception that ${NaN}
is considered equal to itself.

- first item sdsd sdsd sdsdsdsd sdsdsd sdd
- first item sdsd sdsd sdsdsdsd sdsdsd sdd

The following example demonstrates this:
${code`
  // ddd ssd
  // ssdsd sdd ${foo}
`}

And some text after.
`;

append.example`
declare const list: ${TomList};

list.append(1);
console.log(list);
// >> [1]
`;

append.example`
// Another example
`;

foo.desc`
The value to return or ${null}`;

bars.desc`
The value of ${foo} or ${null}`;

append.returns.desc`
The boolean value ${true} if the type of the given ${foo}
extends the ${Function} type. Otherwise, ${false}.`;

append.throws(SyntaxError).desc`
if the passed ${foo} cannot be converted to an integer number.`;

append.test((list: TomList<number>) => {
  assert(list.isEmpty(), "List should be empty");

  test.it`should return ${false} if ${foo} is not a property of ${foo}`(() => {
    expect(isKeyOf("foo", {})).toBe(false);
    expect(isKeyOf("foo", "")).toBe(false);
  });
});
