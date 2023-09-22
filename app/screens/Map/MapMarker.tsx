import React, {useEffect, useState} from "react";
import { View, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function MapMarker({ markerData, id, theme, simplify }:any) {

    const GetIcon = (name: string) => {
        switch (name) {
          case "clothing":
            return <Ionicons name="shirt" size={iconSize} color={iconColor} />;
          case "household":
            return (
              <MaterialCommunityIcons
                name="washing-machine"
                size={iconSize}
                color={iconColor}
              />
            );
          case "toys":
            return <FontAwesome5 name="dice" size={iconSize} color={iconColor} />;
          case "media":
            return <FontAwesome name="book" size={iconSize} color={iconColor} />;
          case "electronics":
            return <MaterialIcons name="devices" size={iconSize} color={iconColor} />;
          case "bicycles":
            return <FontAwesome5 name="bicycle" size={iconSize} color={iconColor} />;
          case "furniture":
            return (
              <MaterialCommunityIcons
                name="table-furniture"
                size={iconSize}
                color={iconColor}
              />
            );
        }
      };

    const iconSize = 24;

    const [iconColor, setIconColor] = useState('black');

    useEffect(() => {
        if (theme === 'dark') {
            setIconColor('white');
        } else {
            setIconColor('black');
        }
    }, [theme]);

    function iconArrangement(categories: any) {
        if(simplify || categories.length === 0) {
            return (
                <FontAwesome5 name="map-pin" size={iconSize} color={iconColor} />
            );
        }
        const lenght = categories.length;
        switch (lenght) {
            case 1:
                return (
                    <View style={[styles.oneCircle, {borderColor:iconColor}]}>
                        {GetIcon(categories[0].name)}
                    </View>
                );
            case 2:
                return (
                    <View style={[styles.oneCircle, {borderColor:iconColor}]}>
                        <View style={styles.row}>
                            {GetIcon(categories[0].name)}
                            {GetIcon(categories[1].name)}
                        </View>
                    </View>

                );
            case 3:
                return (
                    <View style={[styles.twoCircle, {borderColor:iconColor}]}>
                        <View style={styles.row}>
                            {GetIcon(categories[0].name)}
                            {GetIcon(categories[1].name)}
                        </View>
                        <View style={styles.row}>
                            {GetIcon(categories[2].name)}
                        </View>
                    </View>
                );
            default:
                return (
                    <View style={[styles.twoCircle, {borderColor:iconColor}]}>
                        <View style={styles.row}
                        >
                            {GetIcon(categories[0].name)}
                            {GetIcon(categories[1].name)}
                        </View>
                        <View style={styles.row}
                        >
                            {GetIcon(categories[2].name)}
                            <Feather name="more-horizontal" size={iconSize} color="black" />
                        </View>
                    </View>
                );
        }
    }

    if(markerData.latitude && markerData.longitude) {
        return (
            <Marker
                key={markerData.id}
                coordinate={{
                    latitude: markerData.latitude,
                    longitude: markerData.longitude,
                }}
                title={markerData.name}
            >
                {iconArrangement(markerData.categories)}
            </Marker>
        );
        }
    }

    const styles = StyleSheet.create({
        row: {
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 2.5,
            paddingRight: 2.5,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },
        twoCircle: {
            flex: 1,
            width: 90,
            height: 90,
            borderRadius: 50,
            borderWidth: 3,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },
        oneCircle: {
            flex: 1,
            width: 70,
            height: 70,
            borderRadius: 50,
            borderWidth: 3,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });