export function getAncestorOf(target) {
    const proto = Object.getPrototypeOf(target);

    return proto instanceof target.constructor ? proto : null;
}
