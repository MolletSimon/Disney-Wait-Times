import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Font from "expo-font";

const WaitTime = ({waitTime, ridePage,...props }) => {

    return(
        <View style={style.waitTime} {...props}>
            {ridePage ? (
                <Text style={style.textRide}>{waitTime}</Text>
            ) : (
                <Text style={style.textPark}>{waitTime}</Text>
            )}
        </View>
    )
}

const style = StyleSheet.create({
    waitTime: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 100,
        borderColor: 'white',
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPark: {
        fontSize: 30,
        marginTop: 12,
        color: 'white',
        fontFamily: 'Regular'
    },
    textRide: {
        fontSize: 30,
        marginTop: 12,
        color: 'black',
        fontFamily: 'Bold-Condensed'
    }
})

export default WaitTime;
