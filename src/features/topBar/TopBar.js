import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import { Fonts, Colors } from "../../themes";

const TopBar = () => {
    return (
        <View style={{backgroundColor: Colors.reduxColor, height: 50, flexDirection: 'row'}} >
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
                <Text style={Fonts.topBarTitle} >Redux Fundamentals Example</Text>
            </View>
        </View>
    )
}

export default TopBar
