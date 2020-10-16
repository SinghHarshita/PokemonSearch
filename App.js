// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
// import { Button } from 'native-base'

import Screen from './src/components'

// var myBg = require('./assets/background_hdpi.png');

export default function App() {

  return (
    <View style={styles.container}>
      <Screen />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? 24 : 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
