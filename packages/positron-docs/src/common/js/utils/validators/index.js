function empty(value) {
  return value == null || value === "" ? "is empty" : void 0;
}

function email(value) {
  return empty(value) || value.indexOf("@") === -1 ? "wrong format" : void 0;
}

function phone(value) {
  return empty(value);
}

function length(minLength, maxLength = Number.POSITIVE_INFINITY) {
  return (value) => empty(value)
        || (value.length < minLength ? "too short" : value.length > maxLength ? "too long" : void 0);
}

export const validators = {
  empty,
  email,
  phone,
  length
};
