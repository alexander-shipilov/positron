"use strict";

module.exports = function throttle(func, timeout, context) {
    let handle;

    return () => {
        const args = arguments;

        clearTimeout(handle);
        handle = setTimeout(() => func.apply(context, args), timeout);
    };
};
