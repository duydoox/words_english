import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import React from 'react'
import Navigation from './Navigation'
import { pageSelector } from '../features/navigationSlice'
import Translate from './Translate'
import Mywords from './Mywords'
import Game from './Game'

const Main = () => {
    const page = useSelector(pageSelector)
    return (
        <View style={styles.app}>
            <View style={styles.body}>
                {page==='TRANSLATE' && <Translate/>}
                {page==='MYWORDS' && <Mywords/>}
                {page==='GAME' && <Game/>}
            </View>
            <Navigation />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#F0FFFF'
    },
    body: {
        flex: 8,
        padding: 10
    }
})