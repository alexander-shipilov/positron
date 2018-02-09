import GoogleMapReact from "google-map-react";
import { compact } from "positron-core";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";

export class GoogleMap extends Component {
    static get name() {
        return "GoogleMap";
    }

    static propTypes = compact(
        Element.propTypes,
        {
            center: PropTypes.shape({
                lat: PropTypes.number.isRequired,
                lng: PropTypes.number.isRequired
            }),
            zoom: PropTypes.number
        }
    );

    static defaultProps = compact({
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    });

    render() {
        const { children, center, zoom } = this.props;

        return (
            <div className={ this.block() }>
                <GoogleMapReact defaultCenter={ center } defaultZoom={ zoom }>
                    { children }
                </GoogleMapReact>
            </div>
        );
    }
}
