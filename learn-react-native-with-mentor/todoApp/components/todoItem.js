import React from "react"
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityBase} from 'react-native'

const todoItem = ({item, pressHandler}) => {
  return(
    // opacity when touch button.
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#c4c4ff',
    borderWidth: 1,
    borderRadius: 20,
  }
})

export default todoItem;