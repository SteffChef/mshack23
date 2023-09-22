import React from "react";
import { View, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function MapMarker({ markerData, id }:any) {

    const iconTable: { [key: string]: JSX.Element } = {
        TShirt: <FontAwesome5 name="tshirt" size={24} color="black" />,
        // add more icons here
    };

    function iconArrangement(icons: any) {
        const lenght = Object.keys(icons).length;
        switch (lenght) {
            case 1:
                return (
                    <View style={styles.container}>
                        {iconTable[icons[0]]}
                    </View>
                );
            case 2:
                return (
                    <View style={[
                        styles.container,
                        {
                        flexDirection: 'row',
                        }]}
                    >
                        {iconTable[icons[0]]}
                        {iconTable[icons[1]]}
                    </View>
                );
            case 3:
                return (
                    <View style={[
                        styles.container,
                        {
                        flexDirection: 'column',
                    }]}
                    >
                        <View style={[
                            styles.container,
                            {
                            flexDirection: 'row',
                            paddingLeft: 5,
                            }
                        ]}
                        >
                            {iconTable[icons[0]]}
                            {iconTable[icons[1]]}
                        </View>
                        <View style={[
                            styles.container,
                            {
                            flexDirection: 'row',
                            padding: 5,
                            paddingLeft: 5,
                            justifyContent: 'center',
                            }
                        ]}
                        >
                            {iconTable[icons[2]]}
                        </View>
                    </View>
                );
            default:
                return (
                    <View style={[
                        styles.container,
                        {
                        flexDirection: 'column',
                    }]}
                    >
                        <View style={[
                            styles.container,
                            {
                            flexDirection: 'row',
                            paddingLeft: 5,
                            }
                        ]}
                        >
                            {iconTable[icons[0]]}
                            {iconTable[icons[1]]}
                        </View>
                        <View style={[
                            styles.container,
                            {
                            flexDirection: 'row',
                            padding: 5,
                            paddingLeft: 5,
                            }
                        ]}
                        >
                            {iconTable[icons[2]]}
                            <Feather name="more-horizontal" size={24} color="black" />
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
        container: {
            flex: 1,
        }
    });