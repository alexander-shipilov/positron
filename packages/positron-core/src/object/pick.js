export function pick(target, ...props) {
    return Object.assign({}, ...props.map((prop) => target[prop] === void 0 ? null : { [prop]: target[prop] }));
}
