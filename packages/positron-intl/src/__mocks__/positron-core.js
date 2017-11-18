import * as core from "positron-core";

module.exports = Object.assign({}, core, {
    warning: jest.fn()
});
