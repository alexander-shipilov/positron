import { List, filterListProps, ListRenderer } from "/List";
import { TextField, filterTextFieldProps } from "/TextField";
import React from "react";

export const SelectRenderer = {
    getOptionLabel: ListRenderer.getOptionLabel,

    renderList(select) {
        const listProps = filterListProps(select.props);

        return (
            <List { ...listProps } className={ select.element("list") }
                onKeyDown={ select.onListKeyDown }
                onChange={ select.onChange } />
        );
    },

    renderDropButton(select) {
        return (
            <div className={ select.element("drop-button") } />
        );
    },

    render(select) {
        const { value } = select.props;
        const label = this.getOptionLabel(value);
        const textFieldProps = filterTextFieldProps(select.props);

        return (
            <TextField { ...textFieldProps } value={ label } readOnly={ true } className={ select.block() }
                onKeyDown={ select.onInputKeyDown } onMouseDown={ select.onMouseDown }>
                { this.renderDropButton(select) }
            </TextField>
        );
    }
};
