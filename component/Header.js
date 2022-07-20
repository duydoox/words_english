import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux/es/exports'

const Header = () => {
    return (
        <View>
            <Text>Words English</Text>
            <View style={styles.features}>
                <TextInput />
                <TouchableOpacity>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    features: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})