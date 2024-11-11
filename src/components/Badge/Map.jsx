import { APIProvider, Map, Pin, AdvancedMarker } from '@vis.gl/react-google-maps';

export default function MapContainer({addresses}) {
    const position = { lat: -1.9522059588917007, lng: 30.122076283267457 };

    return (
        <APIProvider apiKey={'AIzaSyBvvU6jaJbByhHnsqL2xrCT3FprNdyG6kc'}>
            <Map
                defaultZoom={19}
                defaultCenter={position}
                disableDefaultUI
                mapId='DEMO_MAP_ID'
                mapTypeId='satellite' // Set the map type to satellite
            >
                <AdvancedMarker
                    clickable={true}
                    position={position}
                >
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
            </Map>
        </APIProvider>
    );
}
