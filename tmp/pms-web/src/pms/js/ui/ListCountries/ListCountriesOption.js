import { compact } from "positron-core";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { Flag } from "ui/Flag";
import { ListOption } from "ui/List";

export class ListCountriesOption extends Component {
    static get name() {
        return "ListCountriesOption";
    }

    static propTypes = compact(
        ListOption.propTypes,
        {
            value: PropTypes.object,
            showFlag: PropTypes.bool,
            showName: PropTypes.bool,
            showCode: PropTypes.bool
        }
    );

    static defaultProps = {
        showFlag: true,
        showName: true,
        showCode: true
    };

    render() {
        const { value, showFlag, showName, showCode } = this.props;

        return (
            <ListOption { ...ListOption.filterProps(this.props) } className={ this.block() }>
                { showFlag ? <Flag country={ value } className={ this.element("flag") } /> : null }
                { showName ? <span className={ this.element("name") }>{ value.name }</span> : null }
                { showCode ? <span className={ this.element("phone-code") }>{ value.phoneCode }</span> : null }
            </ListOption>
        );
    }
}
