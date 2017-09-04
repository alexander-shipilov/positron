// @flow

export function randomInt(min: number, max: number): number {
    return min + Math.round(Math.random() * (max - min));
}
