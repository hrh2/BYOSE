import React, { useRef, useEffect, useState } from 'react';
import { APIProvider, Map, Pin, AdvancedMarker } from '@vis.gl/react-google-maps';
const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
// eslint-disable-next-line react/display-name
const StaticMapContainer = React.forwardRef((props, ref) => {
    const mapRef = useRef(null);
    const centerPosition = { lat: -1.9578, lng: 30.1127 };
    const circleRadius = 1000;
    const [circle, setCircle] = useState(null);

    useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current.getMap();

            const newCircle = new window.google.maps.Circle({
                center: centerPosition,
                radius: circleRadius,
                fillColor: '#FF0000',
                fillOpacity: 0.3,
                strokeColor: '#FF0000',
                strokeOpacity: 1,
                strokeWeight: 2
            });

            newCircle.setMap(map);
            setCircle(newCircle);
        }
    }, [mapRef.current]);

    return (
        <APIProvider apiKey={googleApiKey}>
            <Map
                ref={ref} // Forward the ref to the Map component
                defaultZoom={9.5}
                defaultCenter={centerPosition}
                disableDefaultUI
                mapId='DEMO_MAP_ID'
                mapTypeId='roadmap'
            >
                <AdvancedMarker clickable position={centerPosition}>
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
                {/* For debugging: */}
                {circle && <div className={`z-50`}>{`Circle center: ${circle.center.lat()}, ${circle.center.lng()}`}</div>}
            </Map>
        </APIProvider>
    );
});

export default StaticMapContainer;
