import { ImmutableObject } from "positron-immutable";

export class ViewModel extends ImmutableObject {
    static get name() {
        return "ViewModel";
    }

    static get Type() {
        return this.types.item;
    }

    get Type() {
        return this.constructor.item;
    }

    static connect(Type) {
        class ConnectedViewModel extends this {
            static get name() {
                return super.name;
            }
        }

        return ConnectedViewModel.of({ item: Type });
    }
}
