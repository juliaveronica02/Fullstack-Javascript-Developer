import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';

const Test2 = () => {
  return (
    <View>
      {/* service and desc text. */}
      <Text style={styles.services}>Services</Text>
      <Text style={styles.small}>
        Broadcast phone orders to verified merchants nearby at the best prices
        possible
      </Text>
      {/* div square color. */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <View style={{height: 50, width: 50, backgroundColor: 'red'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'black'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'green'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'blue'}} />
      </View>
      {/* div for text. */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={{marginLeft: 10, alignSelf: 'center'}}>Buy</Text>
        <Text style={{marginLeft: 25, alignSelf: 'center'}}>Sell</Text>
        <Text style={{marginLeft: 16, alignSelf: 'center'}}>Repair</Text>
        <Text style={{alignSelf: 'center'}}>Protect</Text>
      </View>
      {/* Devices */}
      <View>
        <Text style={styles.devices}>Devices</Text>
        <View style={{flex: 0, flexDirection: 'row'}}>
          <View style={{flex: 2, backgroundColor: 'white'}}>
            <Text
              style={{
                marginLeft: 70,
                marginRight: 70,
                marginTop: 20,
                color: 'black',
              }}>
              Shawn's Phone
            </Text>
            <Text
              style={{
                marginLeft: 70,
                marginRight: 70,
                marginBottom: 20,
                textAlign: 'left',
                color: 'blue',
              }}
              onPress={() => Linking.openURL('http://google.com')}>
              Google
            </Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'green'}}>
            <Text style={{marginTop: 25, textAlign: 'center'}}>Manage</Text>
          </View>
        </View>
      </View>
      {/* recomendation */}
      <View>
        <Text style={styles.devices}>Recommendations</Text>
        <View style={styles.container}>
          {/* box 1. */}
          <View style={styles.box}>
            <View style={styles.inner}>
              <Text>Box 1</Text>
            </View>
          </View>
          {/* Box 2. */}
          <View style={styles.box}>
            <View style={styles.inner}>
              <Text>Box 2</Text>
            </View>
          </View>
          {/* box 3. */}
          <View style={styles.box}>
            <View style={styles.inner}>
              <Text>Box 3</Text>
            </View>
          </View>
          {/* box 4. */}
          <View style={styles.box}>
            <View style={styles.inner}>
              <Text>Box 4</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  services: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  devices: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    margin: 10,
  },
  small: {
    color: 'black',
    marginLeft: 10,
    backgroundColor: 'white',
    marginRight: 10,
  },
  container: {
    width: 350,
    height: 250,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Test2;
