import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Styling = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8989ff'
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  }
})
export default Styling;
