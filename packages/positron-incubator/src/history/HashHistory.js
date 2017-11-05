import {History} from "./History";
import {addEventListener} from "../../src/dom-event/index"
import {Url} from "../url/index";

const { history } = global;

function getLocation() {
    return Url.from(Url.from(window.location).hash);
}


export class HashHistory extends History {
    init() {
        super.init();

        addEventListener(window, "hashchange", this.onHashChange.bind(this))
    }

    onHashChange() {
        this.trigger({  })
    }

    go(n) {
        history.go(n);
    }

    push() {

    }
}