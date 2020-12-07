import React from 'react';
import {View} from 'react-native';

const FlexDirection = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    </View>
  );
};

export default FlexDirection;
