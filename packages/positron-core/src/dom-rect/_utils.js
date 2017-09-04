// @flow

export type Coord = number | void;

export function validate(value: Coord): boolean {
    return value === null || value === void 0 || isFinite(value);
}

export function add(first: Coord, second: Coord): Coord {
    return (first === void 0 || second === void 0) ? void 0 : Number(first) + Number(second);
}

export function sub(first: Coord, second: Coord): Coord {
    return (first === void 0 || second === void 0) ? void 0 : Number(first) - Number(second);
}

export function half(size: Coord): Coord {
    return size === void 0 ? void 0 : +size / 2;
}

export function toStyle(value: Coord): string {
    return value === void 0 ? "auto" : value + "px";
}
