import { isArrayLike } from "../object";
import { InvariableArray } from "./InvariableArray";
import { InvariableObject } from "./InvariableObject";

describe("InvariableArray", () => {
    it("should implement InvariableObject", () => {
        expect(InvariableObject.isImplementedBy(InvariableArray)).toBeTruthy();
    });

    describe(".from", () => {
        it("creates a new instance of InvariableArray from the specified array-like", () => {
            expect(InvariableArray.from([])).toBeInstanceOf(InvariableArray);

            expect(InvariableArray.from([1, 2, 3]).valueOf()).toEqual([1, 2, 3]);
            expect(InvariableArray.from({ length: 3, 0: 1, 1: 2, 2: 3 }).valueOf()).toEqual([1, 2, 3]);
        });

        it("should create a new instance even if a InvariableArray passed", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(InvariableArray.from(arr)).not.toBe(arr);
            expect(InvariableArray.from(arr).valueOf()).toEqual([1, 2, 3]);
        });
    });

    describe("#constructor", () => {
        it("creates an array-like with specified arguments", () => {
            expect(isArrayLike(new InvariableArray())).toBeTruthy();

            expect(new InvariableArray([]).valueOf()).toEqual(new Array([]));
            expect(new InvariableArray(3).valueOf()).toEqual(new Array(3));
            expect(new InvariableArray(1, 2, 3).valueOf()).toEqual([1, 2, 3]);
        });
    });

    describe("#assign", () => {
        it("returns a new InvariableArray if passed sources applied to the current object modify it", () => {
            const target = new InvariableArray(1, 2, 3);

            expect(target.assign({ 0: 2 })).not.toBe(target);
            expect(target.assign({ 0: 2 })).toBeInstanceOf(InvariableArray);
            expect(target.assign({ 0: 2 }).valueOf()).toEqual([2, 2, 3]);

            expect(target.assign({ 0: 1, 1: 2 }).valueOf()).toEqual([1, 2, 3]);
        });

        it("should accept chaining", () => {
            const target = new InvariableArray(1, 2, 3);

            expect(target.assign({ 0: 0 }).assign({ 1: 1 }).valueOf()).toEqual([0, 1, 3]);
            expect(new InvariableArray(1, 2, 3).assign({ length: 2 }).assign({ length: 1 }).valueOf()).toEqual([1]);
        });

        it("should accept arrays", () => {
            expect(new InvariableArray().assign([1, 2, 3]).valueOf()).toEqual([1, 2, 3]);
            expect(new InvariableArray(1, 2, 3).assign([2, 3]).valueOf()).toEqual([2, 3, 3]);
            expect(new InvariableArray(1, 2, 3).assign([2, 2, 3, 4]).valueOf()).toEqual([2, 2, 3, 4]);
        });

        it("should accept InvariableArrays", () => {
            expect(new InvariableArray().assign(new InvariableArray(1, 2, 3)).valueOf()).toEqual([1, 2, 3]);
            expect(new InvariableArray(1, 2, 3).assign(new InvariableArray(2, 3)).valueOf()).toEqual([2, 3, 3]);
            expect(new InvariableArray(1, 2, 3).assign(new InvariableArray(2, 2, 3, 4)).valueOf())
                .toEqual([2, 2, 3, 4]);

            expect(new InvariableArray().assign(new InvariableArray().assign([1, 2, 3])).valueOf()).toEqual([1, 2, 3]);
            expect(new InvariableArray().assign([1, 2, 3, 4, 5]).assign(new InvariableArray().assign([7, 8])).valueOf())
                .toEqual([7, 8, 3, 4, 5]);
        });

        it("should change `length`", () => {
            const target = new InvariableArray();

            expect(target.assign({ length: 2 }).valueOf()).toEqual([void 0, void 0]);
            expect(target.assign({ 2: 2 }).valueOf()).toEqual([void 0, void 0, 2]);

            expect(target.assign([1, 2, 3], { length: 2 }).valueOf()).toEqual([1, 2]);
            expect(new InvariableArray(1, 2, 3).assign([1, 2, 3], { length: 2 }).valueOf()).toEqual([1, 2]);
        });

        it("should return current instance if object was not modified", () => {
            const target = new InvariableArray().assign({ 0: 1 });

            expect(target.assign()).toBe(target);
            expect(target.assign({})).toBe(target);
            expect(target.assign({ 0: 1 })).toBe(target);
        });

        it("modified array should contain only changed props", () => {
            const target = new InvariableArray(1, 2, 3);

            expect(Object.keys(target.assign({ length: 1 }))).toEqual([]);
            expect(Object.keys(target.assign({ 0: 2 }))).toEqual(["0"]);
            expect(Object.keys(target.assign({ 0: 2, length: 2 }))).toEqual(["0"]);
        });
    });

    describe("#reset", () => {
        it("returns a version created by new operator", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.reset()).toBe(arr);
            expect(arr.push(4).reset()).toBe(arr);
            expect(arr.shift().push(4).reset()).toBe(arr);
        });
    });

    describe("#valueOf", () => {
        it("returns an array which contains all items", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.valueOf()).toBeInstanceOf(Array);
            expect(arr.valueOf()).not.toBeInstanceOf(InvariableArray);
            expect(arr.valueOf()).toEqual([1, 2, 3]);
            expect(arr.assign([4, 5]).valueOf()).toEqual([4, 5, 3]);
        });
    });

    describe("#concat", () => {
        it("merge two or more arrays", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.concat(4)).toBeInstanceOf(InvariableArray);
            expect(arr.concat(4)).not.toBe(arr);
            expect(arr.concat(4).valueOf()).toEqual([1, 2, 3, 4]);

            expect(arr.concat([4, 5], 6)).not.toBe(arr);
            expect(arr.concat([4, 5], 6).valueOf()).toEqual([1, 2, 3, 4, 5, 6]);

            expect(arr.concat(arr)).not.toBe(arr);
            expect(arr.concat(arr).valueOf()).toEqual([1, 2, 3, 1, 2, 3]);

            expect(arr.concat(arr.pop())).not.toBe(arr);
            expect(arr.concat(arr.pop()).valueOf()).toEqual([1, 2, 3, 1, 2]);

            expect(arr.shift().concat(arr.pop())).not.toBe(arr);
            expect(arr.shift().concat(arr.pop()).valueOf()).toEqual([2, 3, 1, 2]);
        });
    });

    describe("#fill", () => {
        it("creates a new instance of InvariableArray if array was modified", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.fill(1)).toBeInstanceOf(InvariableArray);
            expect(arr.fill(1)).not.toBe(arr);
            expect(arr.fill(1).valueOf()).toEqual([1, 1, 1]);
        });

        it("should return the current instance if array was not modified", () => {
            const arr = new InvariableArray(1, 1, 1);

            expect(arr.fill(1)).toBe(arr);
        });

        it("should not modify current instance", () => {
            const arr = new InvariableArray(1, 2, 3);

            arr.fill(1);

            expect(arr.valueOf()).toEqual([1, 2, 3]);
        });
    });

    describe("#filter", () => {
        it("creates a new instance of InvariableArray if filter was applied to one item at least", () => {
            const arr = new InvariableArray(1, 2, 3);
            const filter = (item, index) => index !== 0;

            expect(arr.filter(() => true)).toBe(arr);

            expect(arr.filter(filter)).toBeInstanceOf(InvariableArray);
            expect(arr.filter(filter)).not.toBe(arr);
            expect(arr.filter(filter).valueOf()).toEqual([2, 3]);
            expect(arr.filter(filter).filter(filter).valueOf()).toEqual([3]);
        });

        it("should return the current instance if was called on an empty array", () => {
            const arr = new InvariableArray();

            expect(arr.filter(() => false)).toBe(arr);
        });
    });

    describe("#map", () => {
        it("creates a new array", () => {
            const arr = new InvariableArray(1, 2, 3);
            const handle = (item) => item * 2;

            expect(arr.map(handle)).toBeInstanceOf(Array);
            expect(arr.map(handle)).toEqual([2, 4, 6]);
        });
    });

    describe("#pop", () => {
        it("creates a new instance of InvariableArray if last item was removed", () => {
            const arr = new InvariableArray(1, 2, 3);
            const empty = new InvariableArray();

            expect(empty.pop()).toBe(empty);

            expect(arr.pop()).toBeInstanceOf(InvariableArray);
            expect(arr.pop()).not.toBe(arr);
            expect(arr.pop().valueOf()).toEqual([1, 2]);
            expect(arr.pop().length).toBe(2);
        });

        it("should work with clones", () => {
            expect(new InvariableArray().assign([1, 2, 3]).pop().valueOf()).toEqual([1, 2]);

            expect(new InvariableArray(1, 2, 3).assign({ length: 2 }).pop().valueOf()).toEqual([1]);
        });

        it("should return the current instance if called for an empty array", () => {
            const arr = new InvariableArray();

            expect(arr.pop()).toBe(arr);
        });

        it("should support chaining", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.assign({ length: 2 }).pop().valueOf()).toEqual([1]);
            expect(arr.pop().pop().valueOf()).toEqual([1]);
        });

        it("should return ancestor if it equals to created object", () => {
            const target = new InvariableArray(1, 2, 3);

            expect(target.push(4).pop()).toBe(target);
        });

        it("should not modify current instance", () => {
            const arr = new InvariableArray(1, 2, 3);

            arr.pop();
            expect(arr.valueOf()).toEqual([1, 2, 3]);
        });
    });

    describe("#push", () => {
        it("creates a new instance of InvariableArray if items were added to the end of array", () => {
            const arr = new InvariableArray();

            expect(arr.push(1, 2, 3)).toBeInstanceOf(InvariableArray);
            expect(arr.push(1, 2, 3)).not.toBe(arr);
            expect(arr.push(1, 2, 3).valueOf()).toEqual([1, 2, 3]);
        });

        it("should return the current instance if called without arguments", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.push()).toBe(arr);
        });

        it("should support chaining", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.push(4).push(5).valueOf()).toEqual([1, 2, 3, 4, 5]);
        });

        it("should return ancestor if it equals to created object", () => {
            const target = new InvariableArray(1, 2, 3);

            expect(target.pop().push(3)).toBe(target);
        });

        it("should not modify current instance", () => {
            const arr = new InvariableArray(1, 2, 3);

            arr.push(1);

            expect(arr.valueOf()).toEqual([1, 2, 3]);
        });
    });

    describe("#reverse", () => {
        it("creates a new instance of InvariableArray with reversed values", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.reverse()).toBeInstanceOf(InvariableArray);
            expect(arr.reverse()).not.toBe(arr);
            expect(arr.reverse().valueOf()).toEqual([3, 2, 1]);
        });

        it("should return the current instance if array was not modified", () => {
            const arr = new InvariableArray(1, 1, 1);

            expect(arr.reverse()).toBe(arr);
        });

        it("should return the current instance if called twice", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.reverse().reverse()).toBe(arr);
            expect(arr.reverse().reverse().reverse().reverse()).toBe(arr);
        });

        it("should not modify current instance", () => {
            const arr = new InvariableArray(1, 2, 3);

            arr.reverse();

            expect(arr.valueOf()).toEqual([1, 2, 3]);
        });
    });

    describe("#shift", () => {
        it("creates a new instance of InvariableArray if first item was removed", () => {
            const empty = new InvariableArray();
            const arr = new InvariableArray(1, 2, 3);

            expect(empty.shift()).toBe(empty);

            expect(arr.shift()).toBeInstanceOf(InvariableArray);
            expect(arr.shift()).not.toBe(arr);
            expect(arr.shift().valueOf()).toEqual([2, 3]);
            expect(arr.shift().length).toBe(2);
        });

        it("should support chaining", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.assign({ length: 2 }).shift().valueOf()).toEqual([2]);
            expect(arr.shift().shift().valueOf()).toEqual([3]);
        });

        it("should return ancestor if it equals to the created object", () => {
            const target = new InvariableArray(1, 2, 3);

            expect(target.unshift(0).shift()).toBe(target);
        });

        it("should return the current instance if called for an empty array", () => {
            const arr = new InvariableArray();

            expect(arr.shift()).toBe(arr);
        });

        it("should not modify current instance", () => {
            const arr = new InvariableArray(1, 2, 3);

            arr.shift();
            expect(arr.valueOf()).toEqual([1, 2, 3]);
        });
    });

    describe("#slice", () => {
        it("creates a new instance of InvariableArray from extracted portion of array", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.slice(1)).toBeInstanceOf(InvariableArray);
            expect(arr.slice(1)).not.toBe(arr);
            expect(arr.slice(1).valueOf()).toEqual([2, 3]);
        });

        it("should support both params", () => {
            const arr = new InvariableArray(1, 2, 3, 4, 5);

            expect(arr.slice(0, 2)).toBeInstanceOf(InvariableArray);
            expect(arr.slice(0, 2)).not.toBe(arr);
            expect(arr.slice(0, 2).valueOf()).toEqual([1, 2]);
        });

        it("should return the current instance if extracted portion is equal to the array", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.slice(0)).toBe(arr);
        });
    });

    describe("#sort", () => {
        const reverse = (i1, i2) => i2 - i1;

        it("creates a new instance of InvariableArray if array was sorted", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.sort(reverse)).toBeInstanceOf(InvariableArray);
            expect(arr.sort(reverse)).not.toBe(arr);
            expect(arr.sort(reverse).valueOf()).toEqual([3, 2, 1]);
        });

        it("should return the current instance if array already sorted", () => {
            const arr = new InvariableArray(3, 2, 1);

            expect(arr.sort(reverse)).toBe(arr);
        });

        it("should return the current instance if array was not modified", () => {
            const arr = new InvariableArray(1, 1, 1);

            expect(arr.sort(reverse)).toBe(arr);
        });

        it("should not modify current instance", () => {
            const arr = new InvariableArray(1, 2, 3);

            arr.sort(reverse);

            expect(arr.valueOf()).toEqual([1, 2, 3]);
        });
    });

    describe("#splice", () => {
        it("creates a new instance of InvariableArray if items was removed", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.splice(1, 1)).toBeInstanceOf(InvariableArray);
            expect(arr.splice(1, 1)).not.toBe(arr);
            expect(arr.splice(1, 1).valueOf()).toEqual([1, 3]);
            expect(arr.splice(1, 1).length).toBe(2);
        });

        it("creates a new instance of InvariableArray if items were added", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.splice(1, 0, 1)).toBeInstanceOf(InvariableArray);
            expect(arr.splice(1, 0, 1)).not.toBe(arr);
            expect(arr.splice(1, 0, 1).valueOf()).toEqual([1, 1, 2, 3]);
        });

        it("creates a new instance of InvariableArray if one or more items were replaced", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.splice(1, 1, 1)).toBeInstanceOf(InvariableArray);
            expect(arr.splice(1, 1, 1)).not.toBe(arr);
            expect(arr.splice(1, 1, 1).valueOf()).toEqual([1, 1, 3]);
        });

        it("should return the current instance if array was not modified", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.splice(1, 0)).toBe(arr);
            expect(arr.splice(1, 1, 2)).toBe(arr);
        });

        it("should not modify current instance", () => {
            const arr = new InvariableArray(1, 2, 3);

            arr.splice(1, 1);
            expect(arr.valueOf()).toEqual([1, 2, 3]);
        });

        it("should return ancestor if it equals to created object", () => {
            const target = new InvariableArray(1, 2, 3);

            expect(target.splice(1, 1).splice(1, 0, 2)).toBe(target);
            expect(target.splice(1, 0, 4).splice(1, 1)).toBe(target);
        });
    });

    describe("#unshift", () => {
        it("creates a new instance of InvariableArray if items were added to the start of array", () => {
            const arr = new InvariableArray();

            expect(arr.unshift()).toBe(arr);
            expect(arr.unshift(1, 2, 3)).toBeInstanceOf(InvariableArray);
            expect(arr.unshift(1, 2, 3)).not.toBe(arr);
            expect(arr.unshift(1, 2, 3).valueOf()).toEqual([1, 2, 3]);
        });

        it("should return the current instance if called without arguments", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.unshift()).toBe(arr);
        });

        it("should support chaining", () => {
            const arr = new InvariableArray(1, 2, 3);

            expect(arr.unshift(1, 2, 3)).toBeInstanceOf(InvariableArray);
            expect(arr.unshift(1, 2, 3)).not.toBe(arr);
            expect(arr.unshift(4).unshift(5).valueOf()).toEqual([5, 4, 1, 2, 3]);
        });

        it("should return ancestor if it equals to created object", () => {
            const target = new InvariableArray(1, 2, 3);

            expect(target.shift().unshift(1)).toBe(target);
        });

        it("should not modify current instance", () => {
            const arr = new InvariableArray(1, 2, 3);

            arr.unshift(0);

            expect(arr.valueOf()).toEqual([1, 2, 3]);
        });
    });
});
