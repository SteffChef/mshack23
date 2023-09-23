import React from "react";
import { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MapMarker from "./MapMarker";
import MapViewDirections from "react-native-maps-directions";
import DetailsModal from "../DetailsModal";
import { FontAwesome } from "@expo/vector-icons";
import { Button, Card, Text } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

export default function Map({ bookmarkReference, markers }: any) {
  const mapDefault: Array<any> = [
    {
      featureType: "administrative.land_parcel",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

  const mapDark: Array<any> = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#263c3f",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6b9a76",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#38414e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212a37",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9ca5b3",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#1f2835",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#f3d19c",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#2f3948",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#515c6d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
  ];

  const msCoords = {
    latitude: 51.96236,
    longitude: 7.62571,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const [mapTheme, setMapTheme] = useState(mapDefault);
  const [region, setRegion] = useState(msCoords);
  const [mapAlreadyChanged, setMapAlreadyChanged] = useState(false);
  const [simplifyIcons, setSimplifyIcons] = useState(true);
  const [userLocation, setUserLocation] = useState();
  const [destination, setDestination] = useState(null);
  const [bottomSheet, setBottomSheet] = useState<MarkerDataInterface>({
    id: 0,
    locationType: "",
    name: "",
    address: "",
    latitude: 0,
    longitude: 0,
    openingHours: "",
    infoLink: "",
    categories: [],
  });
  const [bottomSheetIsOpen, setBottomSheetIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [distance, setDistance] = useState(0);
  const [mapSize, setMapSize] = useState<any>("100%");
  const GOOGLE_MAPS_APIKEY = "AIzaSyDLTev5-fhyK1qG7q1MwNtE3uJKSpIlM0I";

  const { colors, dark } = useTheme();

  interface MarkerDataInterface {
    id: number;
    locationType: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    openingHours: string;
    infoLink: string;
    carrier?: string;
    comments?: string;
    categories: Array<any>;
  }

  useEffect(() => {
    if (dark === true) {
      setMapTheme(mapDark);
    } else {
      setMapTheme(mapDefault);
    }
  }, [colors.background]);

  useEffect(() => {
    if (bottomSheetIsOpen) {
      setMapSize("75%");
    } else {
      setMapSize("100%");
    }
  }, [bottomSheetIsOpen]);

  return (
    <View style={styles.container}>
      <>
        <MapView
          style={{ width: "100%", height: mapSize }}
          customMapStyle={mapTheme}
          loadingEnabled={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          region={region}
          provider="google"
          onUserLocationChange={(event) => {
            const coordinates: any = event.nativeEvent.coordinate;
            if (!bottomSheetIsOpen) {
              setUserLocation(coordinates);
            }
            if (
              !mapAlreadyChanged &&
              coordinates.latitude &&
              coordinates.longitude
            ) {
              setRegion({
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              });
              setMapAlreadyChanged(true);
            } else if (!coordinates.latitude && !coordinates.longitude) {
              setMapAlreadyChanged(true);
              setRegion(msCoords);
            }
          }}
          onRegionChange={(region) => {
            if (region.latitudeDelta > 0.03) {
              setSimplifyIcons(true);
            } else {
              setSimplifyIcons(false);
            }
          }}
        >
          {markers.map((marker, index) => (
            <MapMarker
              markerData={marker}
              key={index}
              theme={dark ? "dark" : "default"}
              simplify={simplifyIcons}
              setDestination={setDestination}
              setBottomSheet={setBottomSheet}
              setBottomSheetIsOpen={setBottomSheetIsOpen}
            />
          ))}
          {GOOGLE_MAPS_APIKEY && destination && bottomSheetIsOpen && (
            <MapViewDirections
              origin={userLocation}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
              language="de"
              strokeWidth={3}
              strokeColor={colors.text}
              onReady={(e) => setDistance(e.distance)}
            />
          )}
        </MapView>
        {bottomSheet.id !== undefined && bottomSheetIsOpen && (
          <Card
            key={bottomSheet.id}
            style={{
              backgroundColor: colors.card,
              height: "26%",
              borderRadius: 0,
            }}
          >
            <Card.Title
              title={
                <Text style={{ color: colors.text }}> {bottomSheet.name} </Text>
              }
              subtitle={
                <Text style={{ color: colors.text }}>
                  {" "}
                  {bottomSheet.address}{" "}
                </Text>
              }
            />
            <Card.Content
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: colors.text }}>
                {distance.toFixed(1)} km von dir entfernt
              </Text>
              <TouchableOpacity
                onPress={() =>
                  bookmarkReference.handleBookmarks(bottomSheet.id)
                }
              >
                {bookmarkReference.bookMarkedIds.includes(bottomSheet.id) ? (
                  <FontAwesome name="bookmark" size={24} color={colors.text} />
                ) : (
                  <FontAwesome
                    name="bookmark-o"
                    size={24}
                    color={colors.text}
                  />
                )}
              </TouchableOpacity>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => setBottomSheetIsOpen(false)}>
                Schließen
              </Button>
              <Button onPress={() => setModalVisible(true)}>
                Mehr Informationen
              </Button>
            </Card.Actions>
          </Card>
        )}
        <DetailsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          item={bottomSheet}
        />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
