import React, {useEffect, useState} from "react";
import { View, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

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

    const iconTable: { [key: string]: JSX.Element } = {
        1: <FontAwesome5 name="tshirt" size={iconSize} color={iconColor} />,
        2: <FontAwesome5 name="utensils" size={iconSize} color={iconColor} />,
        3: <FontAwesome5 name="shopping-bag" size={iconSize} color={iconColor} />,
        4: <FontAwesome5 name="home" size={iconSize} color={iconColor} />,
    };

    function iconArrangement(categories: any) {
        if(simplify) {
            return (
                <FontAwesome5 name="map-pin" size={24} color={iconColor} />
            );
        }
        const lenght = Object.keys(categories).length;
        switch (lenght) {
            case 1:
                return (
                    <View style={[styles.oneCircle, {borderColor:iconColor}]}>
                        {iconTable[categories[0].id]}
                    </View>
                );
            case 2:
                return (
                    <View style={[styles.oneCircle, {borderColor:iconColor}]}>
                        <View style={styles.row}>
                            {iconTable[categories[0].id]}
                            {iconTable[categories[1].id]}
                        </View>
                    </View>

                );
            case 3:
                return (
                    <View style={[styles.twoCircle, {borderColor:iconColor}]}>
                        <View style={styles.row}>
                            {iconTable[categories[0].id]}
                            {iconTable[categories[1].id]}
                        </View>
                        <View style={styles.row}>
                            {iconTable[categories[2].id]}
                        </View>
                    </View>
                );
            default:
                return (
                    <View style={[styles.twoCircle, {borderColor:iconColor}]}>
                        <View style={styles.row}
                        >
                            {iconTable[categories[0].id]}
                            {iconTable[categories[1].id]}
                        </View>
                        <View style={styles.row}
                        >
                            {iconTable[categories[2].id]}
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
            title={markerData.name}
        >
            {iconArrangement(markerData.categories)}
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