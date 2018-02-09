import { compact } from "positron-core";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "ui/Button";
import { Component } from "ui/Component";

export class FormSubmit extends Component {
    static get name() {
        return "FormSubmit";
    }

    static propTypes = compact(
        Button.propTypes,
        {
            busy: PropTypes.bool
        }
    );

    onClick = () => {
        const { onClick } = this.props;

        if (onClick) {
            onClick(event);
        }
    };

    render() {
        const { busy, children, disabled } = this.props;

        return (
            <Button { ...Button.filterProps(this.props) } type="submit" disabled={ disabled || busy }
                className={ this.block(null, "btn-primary btn-lg") }>
                { busy ? <i className="fa fa-spinner fa-spin" /> : children }
            </Button>
        );
    }
}
