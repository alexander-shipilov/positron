import type {
  ObserverCallback,
  ObserverInterface,
  ObserverProps,
  ObserverQueue,
  ObserverRecord,
} from "../types";

export class Observer<
  Target,
  ObserveOptions,
  Record extends ObserverRecord<Target> = ObserverRecord<Target>,
> implements ObserverInterface<Target, ObserveOptions, Record>
{
  /**
   * A function which will be called on for all records added during frame.
   */
  protected readonly callback: ObserverCallback<Record, this>;

  /**
   * Records queue
   */
  protected readonly createFrame: () => Promise<void>;

  /**
   * Function to cancel current frame
   */
  protected frame: Promise<void> | null = null;

  /**
   * Records queue
   */
  protected readonly queue: ObserverQueue<Record>;

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

    props: ObserverProps<Record>,
  ) {
    const { createQueue, createFrame } = props;

    this.callback = callback;
    this.queue = createQueue();
    this.createFrame = createFrame;
  }

  /**
   * Adds a record to the {@link Observer} instance queue.
   * @param record - Observer record
   */
  public addRecord(record: Record): void {
    this.queue.add(record);
    this.requestFrame();
  }

  /**
   * Stops the {@link Observer} instance from receiving further
   * notifications until and unless {@link observe} is called again.
   */
  public disconnect(): void {
    for (const target of this.targets.keys()) {
      this.unobserve(target);
    }
  }

  /**
   * The {@link observe} method of the {@link Observer}
   * starts observing the specified target with the specified options
   * @param target - Target
   * @param options - Observe options
   */
  public observe(target: Target, options: ObserveOptions): void {
    this.targets.set(target, options);
  }

  /**
   * Removes all pending notifications from the {@link Observer}'s
   * notification queue and returns them in a new `Array` of
   * {@link ObserverRecord} objects.
   */
  public takeRecords(): Record[] {
    const { targets } = this;

    return this.queue
      .flush()
      .filter((record: Record) => targets.has(record.target));
  }

  /**
   * The {@link unobserve} method of the {@link Observer} interface
   * ends the observing of a specified target
   * @param target - Target
   */
  public unobserve(target: Target): void {
    this.targets.delete(target);
  }

  /**
   * Requests a frame to await records
   */
  protected requestFrame() {
    if (this.frame == null) {
      this.frame = this.createFrame().then(() => {
        const records = this.takeRecords();

        this.frame = null;

        if (records.length) {
          this.callback(records, this);
        }
      });
    }
  }
}
