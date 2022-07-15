import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'

import Home from '../screens/Home'
import Quiz from '../screens/Quiz'
import Result from '../screens/Result'

const MyStatck = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Result" component={Result} />
            <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
    )
}

export default MyStatck

const styles = StyleSheet.create({})
