import React from "react";
import { AppPage } from "ui/AppPage";
import { Component } from "ui/Component";

export class NotFound extends Component {
    static get name() {
        return "NotFound";
    }

    render() {
        return (
            <AppPage className={ this.block() }>
                <br className="sm-50 md-100" />

                <div className="error-container">
                    <div className="error-code">404</div>

                    <div className="error-details">
                        <h4>Oops, <span className="text-primary">You`re lost</span>.</h4>

                        <p>
                            We can not find the page you`re looking for. Is there a typo in the url? Or try the search
                            bar below
                        </p>

                        <form action="#" className="form">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="button">
                                        <i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

                <br className="sm-50 md-100" />
            </AppPage>
        );
    }
}
