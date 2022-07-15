import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTasks([...tasks, task]);
        setTask('');
    }

    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);

    }

    const taskList = tasks.map((item, index) => {
        return (
            <Task key={index} index={index} text={item} delFunc={handleDeleteTask} />
        )
    })

    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Tasks1</Text>
                <View style={styles.items}>

                    {taskList}

                </View>
            </View>


            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={"Write a task"}
                    onChangeText={text => setTask(text)}
                    value={task}

                />

                <TouchableOpacity onPress={handleAddTask}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c7c7c7',

    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,

    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 20
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        width: 250,
        borderRadius: 30,
        borderColor: "#a9a9a9",
        borderWidth: 1,


    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',



    },
    addText: {

    },
});
