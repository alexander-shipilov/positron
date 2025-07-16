export interface AsyncCallback<TResult, TArgs extends unknown[] = []> {
  (...args: TArgs): Promise<TResult>;
}
