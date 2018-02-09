import React from "react";
import { Component } from "ui/Component";

export class Feature extends Component {
    static get name() {
        return "Feature";
    }

    renderImage() {
        const { image, right, title } = this.props;
        const className = "col-sm-6" + (right ? " col-sm-push-6" : "");

        return (
            <div className={ className }>
                <figure className="feature-figure">
                    <img src={ image }
                        className="img-responsive figure-shadow center-block" style={ { width: "90%" } }
                        alt={ title } />
                </figure>
            </div>
        );
    }

    renderContent() {
        const { children, right, title } = this.props;
        const className = "col-sm-6" + (right ? " col-sm-pull-6" : "");

        return (
            <div className={ className }>
                <br className="xs-30 sm-0" />

                <div className="feature-content">
                    <h3>{ title }</h3>
                    { children }
                </div>
            </div>
        );
    }

    render() {
        const { right } = this.props;
        const className = this.block(null, "feature-lg" + (right ? " figure-right" : ""));

        return (
            <div className={ className }>
                <div className="row">
                    { this.renderImage() }
                    { this.renderContent() }
                </div>
            </div>
        );
    }
}
