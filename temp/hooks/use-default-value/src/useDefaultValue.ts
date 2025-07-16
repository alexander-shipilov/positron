import { hasOwnProperty, isDefined } from "@positron/lang";
import * as process from "process";
import { useRef, useState } from "react";

type ValueKey = string;
type Value = ValueKey & "value";

type ValueProps<TKey extends ValueKey, TValue> = {
  [K in TKey]: TValue;
};

type DefaultKey<TKey extends ValueKey> = `default${Capitalize<TKey>}`;

type DefaultProps<TKey extends ValueKey, TValue> = {
  [K in DefaultKey<TKey>]: TValue;
};

type OnChangeKey<TKey extends ValueKey> = TKey extends Value
  ? "onChange"
  : `on${Capitalize<TKey>}Change`;

type OnChangeProps<TP extends ValueKey, TValue> = {
  [K in OnChangeKey<TP>]: (nextValue: TValue) => void;
};

type PropsControlled<TProps extends ValueKey, TValue> = ValueProps<
  TProps,
  TValue
> &
  Partial<OnChangeProps<TProps, TValue>>;

type PropsUncontrolled<TProps extends ValueKey, TValue> = Partial<
  DefaultProps<TProps, TValue>
> &
  Partial<OnChangeProps<TProps, TValue>>;

type Props<TKey extends ValueKey, TValue> =
  | PropsControlled<TKey, TValue>
  | PropsUncontrolled<TKey, TValue>;

type IsReadOnly<TProps> = (props: TProps) => boolean;

function capitalize<TValue extends string>(string: TValue): Capitalize<TValue> {
  return (string.charAt(0).toUpperCase() +
    string.slice(1)) as Capitalize<TValue>;
}

const VALUE: Value = "value";

function isValue(key: ValueKey): key is Value {
  return key === VALUE;
}

function getOnChangeKey<TKey extends ValueKey>(key: TKey): OnChangeKey<TKey> {
  return (
    isValue(key) ? "onChange" : `on${capitalize(key)}Change`
  ) as OnChangeKey<TKey>;
}

function getDefaultKey<TKey extends ValueKey>(key: TKey): DefaultKey<TKey> {
  return `default${capitalize(key)}`;
}

function isControlled<
  TKey extends ValueKey,
  TValue,
  TProps extends Props<TKey, TValue>,
>(props: TProps, prop: TKey): props is TProps & PropsControlled<TKey, TValue> {
  return hasOwnProperty(props, prop) && isDefined(props[prop]);
}

export function createStateProperty<TKey extends ValueKey, TValue>(
  prop: TKey,
  defaultValue: TValue,
) {
  const isDev = process.env.NODE_ENV === "development";

  const onChangeProp = getOnChangeKey(prop);
  const defaultProp = getDefaultKey(prop);

  let stateErrorDisplayed = false;
  let onChangeErrorDisplayed = false;

  function checkControlled(
    controlled: boolean,
    prevControlled: boolean,
  ): boolean {
    if (controlled !== prevControlled && !stateErrorDisplayed) {
      const prev = controlled ? "uncontrolled" : "controlled";
      const curr = controlled ? "controlled" : "uncontrolled";

      stateErrorDisplayed = true;

      console.warn(
        `A component is changing an ${prev} property ${prop} to be ${curr}. ` +
          `This is likely caused by the \`${prop}\` changing from \`undefined\` to a defined value, which should not happen. ` +
          `Decide between using a controlled or uncontrolled \`${prop}\` for the lifetime of the component.`,
      );
    }

    return controlled;
  }

  function checkOnChange<TProps extends Props<TKey, TValue>>(
    props: TProps,
    isReadOnly: IsReadOnly<TProps>,
  ) {
    if (
      !onChangeErrorDisplayed &&
      !isDefined(props[onChangeProp]) &&
      !isReadOnly(props)
    ) {
      onChangeErrorDisplayed = true;

      console.warn(
        `You provided a property \`${prop}\` without an \`${onChangeProp}\` handler. ` +
          `If the \`${prop}\` should be mutable use \`${defaultProp}\`.`,
      );
    }
  }

  return function useStateProperty<TProps extends Props<TKey, TValue>>(
    props: TProps,
    isReadOnly: IsReadOnly<TProps> = () => false,
  ) {
    if (isDev) {
      const controlled = isControlled<TKey, TValue, TProps>(props, prop);
      const controlledRef = useRef(controlled);

      controlledRef.current = checkControlled(
        controlled,
        controlledRef.current,
      );

      if (controlled) {
        checkOnChange(props, isReadOnly);
      }
    }

    const [stateValue, setStateValue] = useState(defaultValue);

    const getValue = (): TValue => {
      const { [prop]: propsValue } = props;

      return isDefined(propsValue)
        ? propsValue
        : isDefined(stateValue)
          ? stateValue
          : defaultValue;
    };

    const setValue = (value: TValue) => {
      if (isReadOnly(props)) {
        // throw
      }

      if (!Object.is(value, getValue())) {
        const { [onChangeProp]: onChange, [prop]: propsValue } = props;

        if (propsValue === undefined) {
          setStateValue(value);
        }

        if (typeof onChange === "function") {
          onChange(value);
        }
      }
    };
  };
}
