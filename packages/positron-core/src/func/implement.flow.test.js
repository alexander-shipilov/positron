// @flow

import { implement } from "./implement";

class Foo {
  ted() {
  }

  static quux() {
  }
}

class Bar {
  baz() {
  }

  static zoo() {
  }
}

const FooBar = implement(Foo, Bar);

FooBar.quux();
FooBar.zoo();

const fooBar = new FooBar();

fooBar.ted();
fooBar.baz();


