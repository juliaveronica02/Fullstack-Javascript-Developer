import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Flexbox from './flexbox';
import Test from './test1';
const LotsOfStyles = () => {
  return (
    <View>
      {/* <View style={styles.container}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      </View> */}
      {/* <Image source={require('./kirito.jpg')} style={{width: 50, height: 50}} />
      <Flexbox /> */}
      <Test />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: '#ff6347',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
export default LotsOfStyles;
