import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleAddWord } from '../features/navigationSlice'

const Header = () => {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <View style={styles.features}>
                <TextInput placeholder='Search...' style={styles.input} />
                <TouchableOpacity style={styles.add}
                onPress={()=>dispatch(toggleAddWord(true))}>
                    <Text style={styles.textAdd}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#228B22',
        height: 70,
    },
    add: {
        flex: 1,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#fff'
    },
    textAdd: {
        fontSize: 20,
        color: '#228B22',
    },
    features: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // height: 100,
        padding: 10,
    },
    input: {
        flex: 5,
        fontSize: 20,
        borderRadius: 25,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        marginRight: 10
    },
    btnSearch: {
        backgroundColor: '#FF7F50',
        borderWidth: 1,
        height: '100%',
        flex: 1.3,
        justifyContent: 'center',
        alignItems: 'center'
    }
})