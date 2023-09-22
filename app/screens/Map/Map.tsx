import React from 'react';
import { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapMarker from './MapMarker';
import MapViewDirections from 'react-native-maps-directions';

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
    const [region, setRegion] = useState(msCoords)
    const [mapAlreadyChanged, setMapAlreadyChanged] = useState(false);
    const [simplifyIcons, setSimplifyIcons] = useState(true);
    const [userLocation, setUserLocation] = useState();
    const [markers, setMarkers] = useState([])
    const GOOGLE_MAPS_APIKEY = '...';


    useEffect(() => {
        if (theme === 'dark') {
            setMapTheme(mapDark);
        } else {
            setMapTheme(mapDefault);
        }
    }, [theme]);

    useEffect(() => {
        fetch('http://172.16.2.102:8080/location/all', {method: "GET"})
        .then((response) => response.json())
        .then((json) => {setMarkers(json)})
        .catch((error) => console.error(error))
    }, []);

    return (
        <View style={styles.container}>
            <MapView   
                style={styles.map}
                customMapStyle={mapTheme}
                loadingEnabled={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                region={region}
                provider='google'
                onUserLocationChange={(event) => {
                    const coordinates:any = event.nativeEvent.coordinate;
                    setUserLocation(coordinates);
                    if(!mapAlreadyChanged && coordinates.latitude && coordinates.longitude ) {
                        setRegion({
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                            latitudeDelta: 0.05,
                            longitudeDelta: 0.05,
                        });
                        setMapAlreadyChanged(true);
                    }
                    else if(!coordinates.latitude && !coordinates.longitude) {
                        setMapAlreadyChanged(true);
                        setRegion(msCoords);
                    }
                }}
                onRegionChange={(region) => {
                    if(region.latitudeDelta > 0.03) {
                        setSimplifyIcons(true);
                    } else {
                        setSimplifyIcons(false);
                    }
                }}
                >
                {markers.map((marker, index) => (
                    <MapMarker markerData={marker} key={index} theme={theme} simplify={simplifyIcons} userLocation={userLocation}/>
                ))}
                {/*check that only called once, change to renderOnTap*/}
                <MapViewDirections
                      origin={userLocation}
                      destination={{latitude: 51.942209, longitude: 7.623405}}
                      apikey={GOOGLE_MAPS_APIKEY}
                      language="de"
                      strokeWidth={3}
                      strokeColor="hotpink"
                    />
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
