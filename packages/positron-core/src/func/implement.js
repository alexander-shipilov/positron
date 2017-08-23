const PROPS_TO_SKIP = {
    apply: true,
    arguments: true,
    bind: true,
    call: true,
    caller: true,
    constructor: true,
    length: true,
    name: true,
    prototype: true,
    toString: true
};

function copyProps(target, source) {
    const props = [
        ...Object.getOwnPropertyNames(source),
        ...Object.getOwnPropertySymbols(source)
    ];
    props.forEach((prop) => {
        if (!PROPS_TO_SKIP.hasOwnProperty(prop)) {
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
        }
    });
    return target;
}

function mix(Aggregation, mixin) {
    if (typeof mixin === "function") {
        copyProps(Aggregation.prototype, mixin.prototype);
    }

    copyProps(Aggregation, mixin);
}

export function implement(Class, ...mixins) {
    if (typeof Class !== "function") {
        throw new TypeError("function expected");
    }

    class Aggregation extends Class {
        static get mixins() {
            return [...(super.mixins || []), ...mixins];
        }
    }

    mixins.forEach((mixin) => {
        mix(Aggregation, mixin);
    });

    return Object.defineProperty(Aggregation, "name", {
        get() {
            return Class.name;
        }
    });
}
