import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'







const Task = (props) => {
    return (
        <View style={styles.item}>

            <View style={styles.itemLeft}>
                <View style={styles.squere}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <TouchableOpacity onPress={() => props.delFunc(props.index)}>
                <View style={styles.circular}></View>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    squere: {
        width: 24,
        height: 24,
        backgroundColor: '#00b8ae',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 8,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#0082b8',
        borderWidth: 3,
        borderRadius: 3
    },

})

export default Task








