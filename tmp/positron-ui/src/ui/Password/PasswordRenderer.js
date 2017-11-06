import React from "react";

export const PasswordRenderer = {
    render(password) {
        return (
            <div className={ password.block() }>
            </div>
        );
    }
};
