export function isImplementationOf(target, ...classes) {
    return typeof target === "function" && classes.every((type) => {
        return target === type
            || (typeof type === "function" && target.prototype instanceof type)
            || (target.mixins && target.mixins.indexOf(type) !== -1)
            || false;
    });
}
