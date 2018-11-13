import { getAncestorOf } from "./getAncestorOf";
import { valueOf } from "./valueOf";

const { is } = Object;

export function assign(target, ...sources) {
  const ancestor = getAncestorOf(target);

  for (let i = 0, l = sources.length; i < l; i++) {
    const source = sources[i];

    if (source != null) {
      const sourceValue = valueOf(source);

      Object.keys(sourceValue).forEach((prop) => {
        const value = sourceValue[prop];

        if (target.hasOwnProperty(prop) && ancestor !== null && is(ancestor[prop], value)) {
          delete target[prop];
        } else if (!is(target[prop], value)) {
          target[prop] = value;
        }
      });
    }
  }

  return target;
}
