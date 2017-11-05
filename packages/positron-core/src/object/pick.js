export function pick(target, props) {
    const values = {};

    props.forEach((prop) => {
        const value = target[prop];

        if (value !== void 0) {
            values[prop] = value;
        }
    });

    return values;
}
