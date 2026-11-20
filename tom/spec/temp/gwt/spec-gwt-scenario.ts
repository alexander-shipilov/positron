import type { TypeGuard } from "@positron/lang";
import { isFiniteNumber } from "@positron/lang";

export declare function isDateBeforeClose(value: unknown): value is Date;

export declare function scenario<TTokens extends readonly TokenLike[]>(
  parts: readonly string[],
  ...tokens: TTokens
): SpecGwtScenario<Subject<Tokens<TTokens>>>;

function token<TID extends string, TType>(
  id: TID,
  guard: TypeGuard<TType>,
  format: (value: NoInfer<TType>) => string = () => id,
): Token<TID, TType> {
  return { format, guard, id };
}

export interface Scenario<
  TSubject extends Record<string, unknown> = Record<never, unknown>,
> {
  readonly description: string;
  readonly subject: TSubject;
}

export interface Token<TID extends string = string, TType = unknown> {
  readonly guard: TypeGuard<TType>;
  readonly id: TID;
  format(value: TType): string;
}

export type Subject<TTokens extends readonly Token[]> = TTokens extends [
  Token<infer ID extends string, infer Type>,
  ...infer Rest extends readonly Token[],
]
  ? Record<ID, Type> & Subject<Rest>
  : Record<never, never>;

export type TokenLike<TID extends string = string, TType = unknown> =
  | readonly [TID, TypeGuard<TType>, ((value: TType) => string)?]
  | TID
  | Token<TID, TType>;

export type Tokens<TTokens extends readonly TokenLike[]> = TTokens extends [
  TokenLike<infer ID extends string, infer Type>,
  ...infer Rest extends readonly TokenLike[],
]
  ? [Token<ID, Type>, ...Tokens<Rest>]
  : [];

export class SpecGwtScenario<TSubject extends Record<string, unknown>> {
  public constructor(
    public readonly desc: string,
    protected readonly subject: (() => TSubject) | TSubject = {} as TSubject,
  ) {}

  public and<TTokens extends readonly TokenLike[]>(
    parts: readonly string[],
    ...tokens: TTokens
  ): SpecGwtScenario<Subject<Tokens<TTokens>> & TSubject> {
    return this as unknown as SpecGwtScenario<
      Subject<Tokens<TTokens>> & TSubject
    >;
  }

  public execute(): void {}

  public given<TTokens extends readonly TokenLike[]>(
    parts: readonly string[],
    ...tokens: TTokens
  ): this {
    return this;
  }

  public then<TTokens extends readonly TokenLike[]>(
    parts: readonly string[],
    ...tokens: TTokens
  ): this {
    return this;
  }

  public when<TTokens extends readonly TokenLike[]>(
    parts: readonly string[],
    ...tokens: TTokens
  ): this {
    return this;
  }
}

const msft = token("msft", isFiniteNumber);
const appl = token("appl", isFiniteNumber);
const time = token("time", isDateBeforeClose, (v: Date) => v.toLocaleString());

scenario`I have ${msft} shares of MSFT stock` //
  .and`I have ${appl} shares of APPL stock` //
  .and`${time} is before close of trading`
  .when`When I ask to sell 20 shares of MSFT stock`
  .then`I should have 80 shares of MSFT stock`
  .and`I should have 150 shares of APPL stock`
  .and`a sell order for 20 shares of MSFT stock should have been executed` //
  .execute(); //
