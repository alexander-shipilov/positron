import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";

describe("PropsOwner", () => {
  describe(".filterProps", () => {
    class Foo extends PropsOwner {
            static propTypes = {
              foo: PropTypes.number,
              bar: PropTypes.number
            };
    }

    it("filters the passed props using the specified prop types definition", () => {
      expect(Foo.filterProps({ foo: 1, bar: 2, ted: 3 })).toEqual({ foo: 1, bar: 2 });
      expect(Foo.filterProps({ ted: 3 })).toEqual({});
    });

    it("should pass data-* and aria-* props", () => {
      expect(Foo.filterProps({ "data-test": 1, "aria-foo": 2 })).toEqual({ "data-test": 1, "aria-foo": 2 });
    });
  });
});
