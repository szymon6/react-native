import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import MyStatck from './navigation/MyStatck'
import Home from './screens/Home'

export default function App() {
    return (
        <NavigationContainer>
            <MyStatck />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 16,
    },
})
