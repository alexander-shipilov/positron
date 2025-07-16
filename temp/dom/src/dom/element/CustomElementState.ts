/**
 * https://dom.spec.whatwg.org/#concept-element-custom-element-state
 *
 * An element’s [custom element state] is one of "undefined", "failed",
 * "uncustomized", "precustomized", or "custom".
 */
export enum CustomElementState {
  undefined = "undefined",
  failed = "failed",
  uncustomized = "uncustomized",
  precustomized = "precustomized",
  custom = "custom",
}
