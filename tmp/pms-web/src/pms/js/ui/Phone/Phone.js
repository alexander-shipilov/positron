import { compact } from "positron-core";
import React from "react";
import { Component } from "ui/Component";
import { DropOwner } from "ui/Drop";
import { TextField } from "ui/TextField";
import { ListCountries } from "ui/ListCountries";

const COUNTRIES = require("constants/countries");

function findByCode(code) {
    return Object.keys(COUNTRIES).find((country) => country.phoneCode === code);
}

export class Phone extends Component {
    static get name() {
        return "Phone";
    }

    static propTypes = compact(
        TextField.propTypes,
        {}
    );

    static defaultProps = {};

    state = { dropVisible: false, code: "", number: "" };

    hideDrop = () => {
        this.setDropVisibleState(false);
    };

    onCodeClick = () => {
        this.setDropVisibleState(!this.state.dropVisible);
    };

    onChange = (code, number) => {
        const { name, onChange } = this.props;

        if (onChange) {
            onChange(code + " " + number, name);
        }
    };

    onCountryChange = (value, country) => {
        this.onChange(country.phoneCode, this.state.number);
    };

    onNumberChange = (value) => {
        this.onChange(this.state.code, value);
    };

    setDropVisibleState(dropVisible) {
        this.setState({ dropVisible });
    }

    componentWillMount() {
        this.currPos = (this.props.value || "").length;
    }

    componentWillReceiveProps({ value }) {
        if (this.props.value !== value) {
            value = value.split(" ");

            this.setState({ code: value.shift(), number: value.join(" ") });
        }
    }

    renderDrop() {
        const { code } = this.state;

        return (
            <ListCountries value={ findByCode(code) } onChange={ this.onCountryChange } />
        );
    }

    renderCode() {
        const { code, dropVisible } = this.state;

        return (
            <DropOwner id="select"
                drop={ this.renderDrop() }
                dropVisible={ dropVisible }
                dropAlign="ll tb | ll bt"
                hideDrop={ this.hideDrop }
                className={ this.element("code", null, "input-group-addon") }
                onClick={ this.onCodeClick }>

                <i className="fa fa-globe" />
                { code }
                <span className="caret" />
            </DropOwner>
        );
    }

    render() {
        const { number } = this.state;

        return (
            <div className="input-group">
                { this.renderCode() }
                <TextField { ...TextField.filterProps(this.props, { children: false }) }
                    value={ number }
                    className={ this.element("number") }
                    onChange={ this.onNumberChange } />
            </div>
        );
    }
}
