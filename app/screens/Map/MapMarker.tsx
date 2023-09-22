import React, {useEffect, useState} from "react";
import { View, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { GetIcon } from "../CategoryIcon";

export default function MapMarker({ markerData, id, theme, simplify }:any) {
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
                        {GetIcon(categories[0].name, iconSize, iconColor)}
                    </View>
                );
            case 2:
                return (
                    <View style={[styles.oneCircle, {borderColor:iconColor}]}>
                        <View style={styles.row}>
                            {GetIcon(categories[0].name, iconSize, iconColor)}
                            {GetIcon(categories[1].name, iconSize, iconColor)}
                        </View>
                    </View>

                );
            case 3:
                return (
                    <View style={[styles.twoCircle, {borderColor:iconColor}]}>
                        <View style={styles.row}>
                            {GetIcon(categories[0].name, iconSize, iconColor)}
                            {GetIcon(categories[1].name, iconSize, iconColor)}
                        </View>
                        <View style={styles.row}>
                            {GetIcon(categories[2].name, iconSize, iconColor)}
                        </View>
                    </View>
                );
            default:
                return (
                    <View style={[styles.twoCircle, {borderColor:iconColor}]}>
                        <View style={styles.row}
                        >
                            {GetIcon(categories[0].name, iconSize, iconColor)}
                            {GetIcon(categories[1].name, iconSize, iconColor)}
                        </View>
                        <View style={styles.row}
                        >
                            {GetIcon(categories[2].name, iconSize, iconColor)}
                            <Feather name="more-horizontal" size={iconSize} color={iconColor} />
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