import { compact, map } from "positron-core";
import React from "react";
import { Component } from "ui/Component";
import { Select } from "ui/Select";
import { ListCountriesOption } from "ui/ListCountries";

const COUNTRIES = require("constants/countries");

export class SelectCountry extends Component {
    static get name() {
        return "SelectCountry";
    }

    static propTypes = compact(
        Select.propTypes
    );

    static defaultProps = {
        options: COUNTRIES
    };

    renderOptions() {
        const { options, showFlag, showName, showCode } = this.props;

        return map(options, (value) => {
            return (
                <ListCountriesOption { ...{ showFlag, showName, showCode, value } } />
            );
        });
    }

    render() {
        return (
            <Select { ...Select.filterProps(this.props) } options={ this.renderOptions() } />
        );
    }
}
