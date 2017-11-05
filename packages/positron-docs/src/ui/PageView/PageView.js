import { Component } from "positron-ui/src/ui/Component";

import "./PageView.scss";
import { PageViewPropTypes } from "./PageViewPropTypes";
import { PageViewRenderer } from "./PageViewRenderer";

export class PageView extends Component {
    setPageState(pages, path, locale) {
        this.setState({ page: pages[path] && pages[path][locale] });
    }

    componentWillMount() {
        const { params: { locale: currLocale }, pages: currPages, route: { path: currPath } } = this.props;

        this.setPageState(currPages, currPath, currLocale);
    }

    componentWillReceiveProps(nextProps) {
        const { params: { locale: nextLocale }, pages: nextPages, route: { path: nextPath } } = nextProps;
        const { params: { locale: currLocale }, pages: currPages, route: { path: currPath } } = this.props;

        if (nextPages !== currPages || nextLocale !== currLocale || nextPath !== currPath) {
            this.setPageState(nextPages, nextPath, nextLocale);
        }
    }
}

PageView.initPropTypes(PageViewPropTypes).initDefaultProps({
    renderer: PageViewRenderer
});
