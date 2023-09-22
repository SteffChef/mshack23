import React from 'react';
import { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapMarker from './MapMarker';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Map({theme}:any) {
    const mapDefault:Array<any> = [
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        }
        ]
    
    const mapDark:Array<any> = [
        {
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#242f3e"
            }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#746855"
            }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#242f3e"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#d59563"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#d59563"
            }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#263c3f"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#6b9a76"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#38414e"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#212a37"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#9ca5b3"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#746855"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#1f2835"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#f3d19c"
            }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#2f3948"
            }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#d59563"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#17263c"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#515c6d"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#17263c"
            }
            ]
        }
        ]
    
    const msCoords = {
        latitude: 51.96236,
        longitude: 7.62571,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    }
    
    const [mapTheme, setMapTheme] = useState(mapDefault);
    const [initialRegion, setInitialRegion] = useState(msCoords)
    const [region, setRegion] = useState(msCoords)
    const [mapAlreadyChanged, setMapAlreadyChanged] = useState(false);
    const [markers, setMarkers] = useState([{
        id: 1,
        title: 'Test',
        description: 'Test',
        latitude: 51.96236,
        longitude: 7.62571,
        icons: ["TShirt", "TShirt","TShirt"]
    }]);

    useEffect(() => {
        if (theme === 'dark') {
            setMapTheme(mapDark);
        } else {
            setMapTheme(mapDefault);
        }
    }, [theme]);

    /*useEffect(() => {
        fetch('https://ms-locations.herokuapp.com/locations')
        .then((response) => response.json())
        .then((json) => setMarkers(json))
        .catch((error) => console.error(error))
    }, []);*/

    return (
        <View style={styles.container}>
            <MapView   
                style={styles.map}
                customMapStyle={mapTheme}
                initialRegion={initialRegion}
                loadingEnabled={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                region={region}
                provider='google'
                onUserLocationChange={(event) => {
                    const coordinates:any = event.nativeEvent.coordinate;
                    if(!mapAlreadyChanged) {
                        setRegion({
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                            latitudeDelta: 0.05,
                            longitudeDelta: 0.05,
                        });
                        setMapAlreadyChanged(true);
                    }
                }}
            >
            {markers.map((marker) => (
                <MapMarker markerData={marker} id={marker.id} />
            ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
