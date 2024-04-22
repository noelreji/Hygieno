import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

import L from 'leaflet';

const MapComponent = () => {
    const [map, setMap] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [mapCenter, setMapCenter] = useState([9.625805821451133, 76.76101006291614]);
    const [mapMarkers, setMapMarkers] = useState([{ 
        position: [9.625805821451133, 76.76101006291614], address: "Example address" }
    ]);
    const markerIconStyles = {
        display: 'block' // Ensure the marker icon is displayed
    };
    const mapRef = useRef(null);
    useEffect(() => {
        // Ensure Leaflet styles are loaded
        import('leaflet/dist/leaflet.css').then(() => {
            console.log('Leaflet styles have been loaded.');
        });
    }, []);

    useEffect(() => {
        if (!map) return;

        // Define click event handler
        const handleClick = (e) => {
            const { lat, lng } = e.latlng;
            const newMarker = {
                position: [lat, lng],
                address: `Clicked location: ${lat.toFixed(5)}, ${lng.toFixed(5)}`
            };
            setMapMarkers([...mapMarkers, newMarker]);
        };
        mapRef.current = map;
        // Add click event listener to the map
        map.on('click', handleClick);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            map.off('click', handleClick);
        };
    }, [map, mapMarkers]);

    const handleSearch = () => {
        const address = searchQuery.trim();
        if (address === '') return;

        const apiKey = 'cd06fa7e977c4a14a72e75caa0435167';
        const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`;

        fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            const { lat, lng } = data.results[0].geometry;
            setMapCenter([lat, lng]); // Update map center
            setMapMarkers([{ position: [lat, lng], address: address }]); // Set marker for searched location
        })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Enter location..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <MapContainer center={mapCenter} zoom={10} style={{ height: '350px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {   
                    mapMarkers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={marker.position}
                            zIndexOffset={1000} // Set a high value to ensure marker appears on top
                            icon={L.divIcon({
                                className: 'custom-icon',
                                html: `<div><i class="fas fa-map-marker-alt"></i></div>`, // FontAwesome icon HTML
                                iconSize: [24, 24], // Size of the icon
                                iconAnchor: [12, 24], // Anchor point of the icon
                                bubblingMouseEvents: true // Allow mouse events to bubble to the map
                            })}
                            eventHandlers={{
                                click: () => mapRef.current.fireEvent('click', { latlng: marker.position })
                            }}
                            >
                            <Popup>{marker.address}</Popup>
                        </Marker>
                    ))
                }

            </MapContainer>

        </div>
    );
};

export default MapComponent;
