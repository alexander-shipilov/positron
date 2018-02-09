"use strict";

function add(points, x, value) {
    if (!points.hasOwnProperty(x)) {
        points[x] = 0;
    }

    points[x] += value;
}

function intervals(points) {
    let retValue = [],
        value = 0, start;

    Object.keys(points).map(Number).sort((a, b) => a - b).forEach((x) => {
        value += points[x];

        if (value > 0 && start === void 0) {
            start = x;
        } else if (value <= 0 && start !== void 0) {
            retValue.push({ start: start, end: x });
            start = void 0;
        }
    });

    return retValue;
}

class Axis {
    constructor() {
        this.points = {};
    }

    add(start, size) {
        add(this.points, start, 1);
        add(this.points, start + size, -1);

        delete this._intervals;
    }

    intervals() {
        if (!this._intervals) {
            this._intervals = intervals(this.points);
        }

        return this._intervals;
    }

    indexOf(coord) {
        let index = -1;

        this.intervals().some(function(range, i) {
            if (coord >= range.start && coord <= range.end) {
                index = i;
            }

            return index !== -1;
        });

        return index;
    }
}

function getBoundingCircle(object) {
    return object.circle.concat().sort((c1, c2) => c2.$.r - c1.$.r)[0];
}

function getBoundingRect(object) {
    let $ = getBoundingCircle(object).$,
        r = +$.r;

    return { x: $.cx - r, y: $.cy - r, width: 2 * r, height: 2 * r };
}

function getInfo(objects) {
    let rows = new Axis(),
        cols = new Axis();

    objects.forEach((object) => {
        let $ = getBoundingRect(object);

        cols.add($.x, $.width);
        rows.add($.y, $.height);
    });

    return {
        rect: (object) => {
            let $ = getBoundingRect(object);

            return Object.assign($, {
                col: cols.indexOf($.x),
                row: rows.indexOf($.y)
            });
        }
    };
}

module.exports = {
    getInfo: getInfo
};

