import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Result = () => {
    return (
        <View>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
                {/* <Image
                    source={require('../images/result.jpg')}
                    style={styles.banner}
                /> */}
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
    },
    bannerContainer: {
        alignItems: 'center',
    },
})
