import React, { useState } from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Test from './components/Header';
import TodoItem from './components/todoItem'
import AddTodo from "./components/addTodo"

const todo = () => {
  // list todo.
  const [todo, setTodo] = useState([ // initial state.
    // item.
    {text: 'coffee', key: '1'},
    {text: 'app', key: '2'},
    {text: 'sleep', key: '3'}
  ])
  // pressHandler = identify which object want to delete from item.
  // pass it on Flatlist.
  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key)
    })
  }
  // submit function when press add todo and pass it into AddTodo.
  const submitHandler = (text) => {
    setTodo((prevTodo)=> {
      return [
        {text: text, key:Math.random().toString()},
        ...prevTodo // take all todo list.
      ]
    })
  }
  return (
    <View>
      {/* header. */}
      <Test />
      <View style={styles.content}>
        {/* todo form. */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          {/* item list */}
          <FlatList data={todo} renderItem={({item})=> (
            // call item to show text from useState.
            // <Text>{item.text}</Text>
            <TodoItem item={item} pressHandler={pressHandler}/> // output todo item for each item.
          )} />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  list: {
    marginTop: 10,
  }
})
export default todo;
