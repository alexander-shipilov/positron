import React, { Children, cloneElement } from "react";
import { Component } from "ui/Component";
import { Row } from "ui/Row";

export class CarouselItem extends Component {
    static get name() {
        return "CarouselItem";
    }

    render() {
        const { active, style, children, cols, ...props } = this.props;
        const className = this.block(null, "item" + (active ? " active" : ""));

        return (
            <div { ...props } className={ className } style={ style }>
                <br className="xs-30 sm-60" />
                <div className="container">
                    <Row cols={ cols } className={ this.element("row") }>
                        { children }
                    </Row>
                </div>
            </div>
        );
    }
}

export class Carousel extends Component {
    static get name() {
        return "Carousel";
    }

    static defaultProps = {
        timeout: 5000
    };

    state = { index: 0, paused: false };

    onNextClick = (event) => {
        event.preventDefault();

        this.setIndexState(this.state.index + 1);
    };

    onPrevClick = (event) => {
        event.preventDefault();

        this.setIndexState(this.state.index - 1);
    };

    onKeyDown = (event) => {
    };

    onMouseEnter = () => {
        this.setPausedState(true);
    };

    onMouseLeave = () => {
        this.setPausedState(false);
    };

    onTimeout = () => {
        const { paused, index } = this.state;

        this.setIndexState(index + 1);

        if (!paused) {
            this.startTimeout();
        }
    };

    setIndexState(index) {
        const { children } = this.props;
        const count = Children.count(children);

        this.setState({ index: (count + index) % count });
    }

    setPausedState(paused) {
        if (this.state.paused !== paused) {
            this.setState({ paused });

            if (paused) {
                this.stopTimeout();
            } else {
                this.startTimeout();
            }
        }
    }

    componentDidMount() {
        this.startTimeout();
    }

    componentWillUnmount() {
        this.stopTimeout();
    }

    stopTimeout() {
        if (this._timeout) {
            clearTimeout(this._timeout);
            this._timeout = void 0;
        }
    }

    startTimeout() {
        const { timeout } = this.props;

        if (!this._timeout) {
            this._timeout = setTimeout(() => {
                this._timeout = void 0;

                this.onTimeout();
            }, timeout);
        }
    }

    render() {
        const { children } = this.props;
        const { index } = this.state;

        return (
            <div className={ this.block(null, "slide carousel-fade masthead-carousel") }
                onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave }>
                <div className="carousel-inner">
                    {
                        Children.map(children, (child, childIndex) => {
                            return cloneElement(child, { active: childIndex === index });
                        })
                    }
                </div>

                <div className={ this.element("controls", null, "container") }>
                    <div className="carousel-controls">
                        <a className="carousel-control left" href="#" onClick={ this.onPrevClick }>&lsaquo;</a>
                        { " " }
                        <a className="carousel-control right" href="#" onClick={ this.onNextClick }>&rsaquo;</a>
                    </div>
                </div>
            </div>
        );
    }
}
