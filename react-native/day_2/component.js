import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
  Platform,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Component = () => {
  const [avatarSource, setAvatarSource] = useState('');
  const onPressButton = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        // this.setState({
        //   avatarSource: source,
        // });
        setAvatarSource(response.data);
      }
    });

    alert('You tapped the button');
  };
  console.log(avatarSource);

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
        <View>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: 'red',
              borderRadius: 50,
            }}
          />
          <Text style={{alignSelf: 'center'}}>Buy</Text>
          {/* <Button onPress={()=> {
            alert("You tapped the button")
          }}
          title="Press Me" /> */}
          <TouchableNativeFeedback
            onPress={() => onPressButton()}
            background={
              Platform.OS === 'android'
                ? TouchableNativeFeedback.SelectableBackground()
                : ''
            }>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                TouchableNativeFeedback
                {Platform.OS !== 'android' ? '(Android only)' : ''}
              </Text>
            </View>
          </TouchableNativeFeedback>
          <View>
            <Image
              source={{
                uri: 'data:image/png;base64,' + avatarSource,
              }}
              style={{width: 50, height: 50}}
            />
            <Text>asdf</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: 'black',
              borderRadius: 50,
            }}
          />
          <Text style={{alignSelf: 'center'}}>Sell</Text>
        </View>
        <View>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: 'green',
              borderRadius: 50,
            }}
          />
          <Text style={{alignSelf: 'center'}}>Repair</Text>
        </View>
        <View>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: 'blue',
              borderRadius: 50,
            }}
          />
          <Text style={{alignSelf: 'center'}}>Protect</Text>
        </View>
      </View>
      {/* div for text. */}
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}> */}
      {/* </View> */}
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
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
});

export default Component;
