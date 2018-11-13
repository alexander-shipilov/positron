export function toJSON(value) {
  return value !== null && value !== void 0 && typeof value.toJSON === "function" ? value.toJSON() : value;
}
