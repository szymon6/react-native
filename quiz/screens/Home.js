import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Title from '../components/Title'

const Home = () => {
    return (
        <View>
            <Text>home screen</Text>
            <Title />
            <View style={styles.bannerContainer}>
                <Image
                    source={{
                        uri: 'https://img.freepik.com/darmowe-wektory/quiz-w-komiksowym-stylu-pop-art_175838-505.jpg?size=626&ext=jpg',
                    }}
                    style={styles.banner}
                />
            </View>
        </View>
    )
}

export default Home

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
