import React from "react";
import { Component } from "ui/Component";
import { IndexLink } from "react-router";

const START_YEAR = 2018;

export class AppCopyright extends Component {
    static get name() {
        return "AppCopyright";
    }

    render() {
        const year = new Date().getFullYear();

        return (
            <footer className={ this.block(null, "copyright") }>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p>
                                Copyright &copy; {START_YEAR} {year !== START_YEAR ? " - " + year : ""}&nbsp;
                                <IndexLink to="/">BotPad</IndexLink>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
