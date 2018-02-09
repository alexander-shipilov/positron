import { compact, map } from "positron-core";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { List } from "ui/List";
import { ListCountriesOption } from "./ListCountriesOption";

const COUNTRIES = require("constants/countries");

export class ListCountries extends Component {
    static get name() {
        return "ListCountries";
    }

    static propTypes = compact(
        List.propTypes,
        {
            flag: PropTypes.bool,
            name: PropTypes.bool,
            code: PropTypes.bool
        }
    );

    static defaultProps = {
        options: COUNTRIES,
        flag: true,
        name: true,
        code: true
    };

    onChange = (value) => {
        const { options, onChange } = this.props;

        if (onChange) {
            onChange(value, options[value]);
        }
    };

    renderOptions() {
        const { options, flag, name, code } = this.props;

        return map(options, (value) => {
            return (
                <ListCountriesOption { ...{ flag, name, code, value } } />
            );
        });
    }

    render() {
        return (
            <List { ...List.filterProps(this.props) } options={ this.renderOptions() }
                className={ this.block() }
                onChange={ this.onChange } />
        );
    }
}
