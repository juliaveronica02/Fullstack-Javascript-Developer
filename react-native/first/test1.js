import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Test2 from './test2';

const Learn = () => {
  return (
    <View>
      <View style={StyleSheet.container}>
        <Text style={styles.title}> Explore</Text>
      </View>
      <Test2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
export default Learn;
