// @flow

export function endWith(value: ?string, searchString: string): string {
    return value === void 0 || value === null ? ""
        : value === "" || searchString === "" || value.endsWith(searchString) ? value : value + searchString;
}

export function startWith(value: ?string, searchString: string): string {
    return value === void 0 || value === null ? ""
        : value === "" || searchString === "" || value.startsWith(searchString) ? value : searchString + value;
}

export function decode(value: ?string): ?string {
    if (value !== void 0 && value !== null) {
        try {
            value = decodeURIComponent(value);
        } catch (ignore) {
        }
    }

    return value;
}

export function encode(value: ?string): string {
    return value === void 0 || value === null ? "" : encodeURIComponent(value);
}