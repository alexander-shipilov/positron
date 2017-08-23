// @flow

export function randomInt(min, max) {
    return min + Math.round(Math.random() * (max - min));
}
