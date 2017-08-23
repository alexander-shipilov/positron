const BASE = 36;

const MIN_UID = parseInt("10000000", BASE);
const MAX_UID = parseInt("zzzzzzzz", BASE);

let uidCount = MAX_UID;
let uidPrefix = "";

function randomInt(min, max) {
    return min + Math.round(Math.random() * (max - min));
}

function init() {
    uidPrefix = Date.now().toString(BASE);
    uidCount = MIN_UID + randomInt(0, MIN_UID / BASE);
}

export function uid(prefix = "") {
    if (uidCount >= MAX_UID) {
        init();
    }

    return prefix + uidPrefix + (uidCount++).toString(BASE);
}
