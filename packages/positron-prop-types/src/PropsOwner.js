import { filter } from "positron-core";

export class PropsOwner {
    static propTypes = {};

    static filterProps(props, ...include) {
      include = include.length ? Object.assign({}, this.propTypes, ...include) : this.propTypes;

      return filter(props, (prop, key) => include[key] || key.indexOf("data-") === 0 || key.indexOf("aria-") === 0);
    }
}
