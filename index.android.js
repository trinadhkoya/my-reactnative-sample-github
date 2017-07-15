/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'React';
import {Text, AppRegistry, View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import RepositoryList from './src/components/RepositoryList';

// create a Component

const SampleApplication = () => (

  <View style={styles.fillViewPort}>

    <Header headerText={'Albums'}></Header>
    <RepositoryList/>

  </View>

);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class SampleApplication extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#000',
    marginBottom: 5
  },

  // this is the style which makes Ui fit
  fillViewPort: {
    flex: 1
  }

});
//
AppRegistry.registerComponent('SampleApplication', () => SampleApplication);
