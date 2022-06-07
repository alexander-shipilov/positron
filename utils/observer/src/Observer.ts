import { Optional } from "@positron/utility-types";
import {
  ObserverCallback,
  ObserverCancelFrame,
  ObserverInterface,
  ObserverProps,
  ObserverQueue,
  ObserverRecord,
  ObserverRequestFrame,
} from "../types";

export class Observer<
  Target,
  ObserveOptions,
  Record extends ObserverRecord<Target> = ObserverRecord<Target>
> implements ObserverInterface<Target, ObserveOptions, Record>
{
  /**
   * A function which will be called on for all records added during frame.
   */
  protected readonly callback: ObserverCallback<Record, this>;

  /**
   * Function to cancel current frame
   */
  protected cancelFrame: Optional<ObserverCancelFrame>;

  /**
   * Records queue
   */
  protected readonly queue: ObserverQueue<Record>;

  /**
   * Records queue
   */
  protected readonly requestFrame: ObserverRequestFrame<Record>;

  /**
   * Map of targets and options
   */
  protected readonly targets: Map<Target, ObserveOptions> = new Map();

  /**
   * @param callback - Callback to
   * @param props - Properties
   */
  constructor(
    callback: ObserverCallback<
      Record,
      ObserverInterface<unknown, unknown, Record>
    >,
    props: ObserverProps<Record>
  ) {
    const { createQueue, requestFrame } = props;

    this.callback = callback;
    this.queue = createQueue();
    this.requestFrame = requestFrame;
  }

  public addRecord(record: Record): void {
    this.queue.add(record);

    if (!this.cancelFrame) {
      this.cancelFrame = this.requestFrame(() => {
        const records = this.takeRecords();

        delete this.cancelFrame;

        if (records.length) {
          this.callback(records, this);
        }
      });
    }
  }

  public disconnect(): void {
    for (const target of this.targets.keys()) {
      this.unobserve(target);
    }
  }

  public observe(target: Target, options: ObserveOptions): void {
    this.targets.set(target, options);
  }

  public takeRecords(): Record[] {
    const { targets } = this;

    return this.queue
      .flush()
      .filter((record: Record) => targets.has(record.target));
  }

  public unobserve(target: Target): void {
    const { targets } = this;

    targets.delete(target);

    if (targets.size === 0) {
      this.cancelFrame?.();
    }
  }
}
