import { compact } from "positron-core";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { TextField } from "ui/TextField";

export class Password extends Component {
    static get name() {
        return "Password";
    }

    static propTypes = compact(
        TextField.propTypes,
        {
            canBeVisible: PropTypes.bool
        }
    );

    static defaultProps = {
        canBeVisible: true
    };

    state = { visible: false };

    onFeedbackClick = () => {
        this.setVisibleState(!this.state.visible);
    };

    setVisibleState(visible) {
        this.setState({ visible });
    }

    renderFeedback() {
        const { canBeVisible } = this.props;
        const { visible } = this.state;

        return canBeVisible
            ? <i className={ "fa fa-" + (visible ? "eye-slash" : "eye") } onClick={ this.onFeedbackClick } />
            : null;
    }

    render() {
        const { visible } = this.state;

        return (
            <TextField { ...TextField.filterProps(this.props) } type={ visible ? "text" : "password" }
                feedback={ this.renderFeedback() } className={ this.block() } />
        );
    }
}
