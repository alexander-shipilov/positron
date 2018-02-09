import React from "react";
import { Component } from "ui/Component";
import { Row } from "ui/Row";

export class AppFooterItem extends Component {
    static get name() {
        return "AppFooterItem";
    }

    render() {
        const { size, title, children } = this.props;

        return (
            <div className={ this.block(null, "col-sm-" + size) }>
                <div className="heading-block">
                    <h4>{ title }</h4>
                </div>
                { children }
            </div>
        );
    }
}

export class AppFooter extends Component {
    static get name() {
        return "AppFooter";
    }

    render() {
        const { children } = this.props;

        return (
            <footer className={ this.block(null, "footer") }>
                <div className="container">
                    <Row cols={ 4 }>
                        { children }
                    </Row>
                </div>
            </footer>
        );
    }
}
