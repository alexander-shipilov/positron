import { filter } from "positron-core";

export class Props {
    static propTypes = {};

    static filterProps(props, ...include) {
        include = include.length ? { ...this.propTypes, ...include } : this.propTypes;

        return filter(props, (prop, key) => include[key] || key.indexOf("data-") === 0 || key.indexOf("aria-") === 0);
    }
}
