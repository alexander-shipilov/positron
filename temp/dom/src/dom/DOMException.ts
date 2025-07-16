/**
 * https://webidl.spec.whatwg.org/#idl-DOMException
 */
export class DOMException extends Error {
  constructor(message: string, readonly name: string) {
    super(message);
  }
}
