export function classNames(...args) {
    const classes = [];

    for (let i = 0, l = args.length; i < l; i++) {
        let arg = args[i];

        if (typeof arg === "object") {
            arg = classNames(...(Array.isArray(arg) ? arg : Object.keys(arg).filter((key) => arg[key])));
        }

        if (arg) {
            classes.push(arg);
        }
    }

    return classes.join(" ");
}
