import { Component } from "positron-ui/src/ui/Component";

import "./App.scss";
import { AppPropTypes } from "./AppPropTypes";
import { AppRenderer } from "./AppRenderer";

export class App extends Component {
    onAccentSelect = (accent) => {
        const { setAccent } = this.props.settingsActions;

        setAccent.trigger(accent);
    };

    onExpandClick = () => {
        const { settings: { expanded }, settingsActions: { setExpanded } } = this.props;

        setExpanded.trigger(!expanded);
    };

    onMainMouseClick = () => {
        const { settings: { expanded }, settingsActions: { setExpanded } } = this.props;

        if (expanded) {
            setExpanded.trigger(false);
        }
    };

    componentWillMount() {
        const { intlActions: { setLocale }, params: { locale } } = this.props;

        setLocale.trigger(locale);
    }

    componentWillReceiveProps(nextProps) {
        const { location, params } = this.props;
        const { location: nextLocation, params: nextParams } = nextProps;
        const { settingsActions: { setExpanded }, intlActions: { setLocale } } = this.props;

        if (location.pathname !== nextLocation.pathname) {
            setExpanded.trigger(false);
        }

        if (params.locale !== nextParams.locale) {
            setLocale.trigger(nextParams.locale);
        }
    }
}

App.initPropTypes(AppPropTypes).initDefaultProps({
    renderer: AppRenderer
});
