function removeListeners(removers) {
    return () => {
        removers.forEach((remover) => {
            remover();
        });
    };
}

function addListener(element, event, listener, capture) {
    element.addEventListener(event, listener, capture);

    return function() {
        return element.removeEventListener(event, listener, capture);
    };
}

export function addEventListener(element, events, listener, capture = false) {
    return removeListeners(events.split(/\s+/).map((event) => addListener(element, event, listener, capture)));
}
