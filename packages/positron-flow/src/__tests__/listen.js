import { Listener } from "../Listener";
import { listen } from "../listen";
import { Publisher } from "../Publisher";

describe("listen", () => {
  it("creates new listener with specified publisher and queue", () => {
    const publisher = new Publisher();
    const handler = () => {};
    const listener = listen(publisher, handler);

    expect(listener).toBeInstanceOf(Listener);
    expect(listener.publisher).toBe(publisher);
    expect(listener.handler).toBe(handler);
  });
});
