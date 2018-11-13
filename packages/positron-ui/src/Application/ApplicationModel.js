// @flow

import { ImmutableObject } from "positron-immutable";
import { IntlFormatter } from "positron-intl";

export class ApplicationModel extends ImmutableObject {
    theme: string;

    intl: IntlFormatter;
}

ApplicationModel.of({
  intl: IntlFormatter
});
