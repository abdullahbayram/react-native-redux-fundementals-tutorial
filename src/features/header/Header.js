import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import {Colors, Fonts} from "../../themes";

const Header = () => {
    const [text, setText] = useState('')

    const handleChange = (text) => setText(text)

    return (
        <View style={{ height: 50, flexDirection: 'row'}} >
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
                <Text style={Fonts.headerTitle} >Todos</Text>
                <View style={{flexDirection: 'row', paddingHorizontal:10}} >
                    <TextInput
                        onChangeText={handleChange}
                        value={text}
                        placeholder={'What needs to be done?'}
                        multiplelines
                        style={{borderBottomWidth: 1, flex:1, paddingHorizontal: 10, borderBottomColor: Colors.dedeGray}}
                    />
                </View>
            </View>
        </View>
    )
}

export default Header
