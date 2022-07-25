import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import React from 'react'
import Navigation from './Navigation'
import { pageSelector } from '../features/navigationSlice'
import Translate from './Translate'
import Mywords from './Mywords'
import Game from './Game'
import AddWord from './AddWord'
import { selecIsAddWord } from '../features/navigationSlice'

const Main = () => {
    const page = useSelector(pageSelector)
    const isAddWord = useSelector(selecIsAddWord)
    return (
        <View style={styles.app}>
            <View style={styles.body}>
                {page==='TRANSLATE' && <Translate/>}
                {page==='MYWORDS' && <Mywords/>}
                {page==='GAME' && <Game/>}
            </View>
            <Navigation />
            {isAddWord && <AddWord/>}
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#F5FFFA',
    },
    body: {
        flex: 8,
    }
})