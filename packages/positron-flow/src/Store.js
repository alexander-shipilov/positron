// @flow

import { isEqualObjects } from "positron-core";
import { Publisher } from "./Publisher";

export interface StoreState {
}

export class Store extends Publisher {
    state: StoreState;

    constructor(state?: StoreState) {
      super();

      this.setState(state);
    }

    trigger(): Promise<any> {
      return super.trigger(this.state);
    }

    assignState(nextState) {
      const { state } = this;

      if (state !== nextState) {
        if (nextState != null) {
          nextState = { ...state, ...nextState };
        }
      }

      return isEqualObjects(nextState, state) ? state : nextState;
    }

    setState(nextState) {
      nextState = this.assignState(nextState);

      if (this.state !== nextState) {
        this.state = nextState;
        this.trigger();
      }

      return Promise.resolve(this.state);
    }
}
