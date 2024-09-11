// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Circle as GoogleMapCircle } from '@vis.gl/react-google-maps';

const Circle = ({ center, radius, strokeColor, strokeOpacity, strokeWeight, fillColor, fillOpacity }) => {
    if (!center) return null;

    return (
        <GoogleMapCircle
            center={center}
            radius={radius}
            options={{
                strokeColor,
                strokeOpacity,
                strokeWeight,
                fillColor,
                fillOpacity,
            }}
        />
    );
};

export default Circle;
