import { compact } from "positron-core";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";

export class Captcha extends Component {
    static get name() {
        return "Captcha";
    }

    static propTypes = compact(
        Element.propTypes,
        {
            help: PropTypes.node,
            label: PropTypes.node,
            labelFor: PropTypes.string,
            siteKey: PropTypes.string
        }
    );

    captchaTimeout = null;

    widgetId = null;

    promise = null;

    onChange = (value) => {
        const { name, onChange } = this.props;

        if (onChange) {
            onChange(value || "", name);
        }
    };

    captchaCallbak = (value) => {
            this.onChange(value);

            if (value) {
                resolve(value);
            } else {
                reject(value);
            }
    };

    setCaptchaState = () => {
        const { grecaptcha: captcha } = window;

        if (captcha) {
            this.setState({ captcha });
        } else {
            this.captchaTimeout = setTimeout(this.setCaptchaState, 100);
        }
    };

    renderCaptcha() {
        if (this.container && !this.widgetId) {
            const { siteKey } = this.props;
            const { captcha } = this.state;

            this.widgetId = captcha.render(this.id, {
                sitekey: siteKey,
                callback: this.captchaCallbak,
                size: "invisible",
                badge: "inline"
            });
        }
    }

    componentWillMount() {
        this.setCaptchaState();
    }

    componentDidMount() {
        this.renderCaptcha();
    }

    componentDidUpdate() {
        this.renderCaptcha();
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        if (this.captchaTimeout) {
            clearTimeout(this.captchaTimeout);
        }
    }

    execute() {
        const { promise } = this;

        if (promise) {
            this.captcha.execute();
        }

        return promise || Promise.reject("Captcha is not rendered");
    }

    render() {
        const { captcha } = this.state;

        return captcha
            ? (
                <div ref={ this.ref("container") } id={ this.id } className={ this.block() } />
            )
            : null;
    }
}
