// @flow

export function isImplementationOf(target: Function, ...types: Function[]): boolean {
    return typeof target === "function" && types.every((type) => {
        return target === type
            || (typeof type === "function" && target.prototype instanceof type)
            || (target.mixins && target.mixins.indexOf(type) !== -1)
            || false;
    });
}
