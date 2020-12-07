import React, { useState } from "react"
import {StyleSheet, TextInput, Button, View} from 'react-native'

const addTodoList = ({submitHandler}) => {
    // for input field.
    const [text, setText] = useState('');
    const changeHandler = (value) => {
        setText(value);
    }
  
    return(
        <View>
            <TextInput
                style={styles.input} placeholder="new todo ..." onChangeText={changeHandler} value={text} 
            />
            {/* <Button onPress={() => console.log("text", text)} title='add todo' /> */}
            <Button onPress={() => submitHandler(text)} title='add todo' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
export default addTodoList;