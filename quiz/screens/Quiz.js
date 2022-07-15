import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Quiz = () => {
    return (
        <View style={styles.container}>


            <View style={styles.top}>
                <Text>Really cool question</Text>
            </View>




            <View style={styles.options}>

                <TouchableOpacity>
                    <Text>Cool option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cool option 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cool option 3</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cool option 4</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity>
                    <Text>SKIP</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',
    },
    top: {
        marginVertical: 16
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})
