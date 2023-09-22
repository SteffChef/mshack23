import React from "react";
import { View, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function MapMarker({ markerData, id }:any) {

    const iconSize = 24;

    const iconTable: { [key: string]: JSX.Element } = {
        TShirt: <FontAwesome5 name="tshirt" size={iconSize} color="black" />,
        // add more icons here
    };

    function iconArrangement(icons: any) {
        const lenght = Object.keys(icons).length;
        switch (lenght) {
            case 1:
                return (
                    <View style={styles.oneCircle}>
                        {iconTable[icons[0]]}
                    </View>
                );
            case 2:
                return (
                    <View style={styles.oneCircle}>
                        <View style={styles.row}>
                            {iconTable[icons[0]]}
                            {iconTable[icons[1]]}
                        </View>
                    </View>

                );
            case 3:
                return (
                    <View style={styles.twoCircle}>
                        <View style={styles.row}>
                            {iconTable[icons[0]]}
                            {iconTable[icons[1]]}
                        </View>
                        <View style={styles.row}>
                            {iconTable[icons[2]]}
                        </View>
                    </View>
                );
            default:
                return (
                    <View style={styles.twoCircle}>
                        <View style={styles.row}
                        >
                            {iconTable[icons[0]]}
                            {iconTable[icons[1]]}
                        </View>
                        <View style={styles.row}
                        >
                            {iconTable[icons[2]]}
                            <Feather name="more-horizontal" size={iconSize} color="black" />
                        </View>
                    </View>
                );
        }
    }

    return (
        <Marker
            key={markerData.id}
            coordinate={{
                latitude: markerData.latitude,
                longitude: markerData.longitude,
            }}
            title={markerData.title}
            description={markerData.description}
        >
            {iconArrangement(markerData.icons)}
        </Marker>
    );
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
            borderColor: 'black',
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
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });