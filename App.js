import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Todo} from './src/app/Todo';
import {Reddit} from './src/app/Reddit';


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Todo />    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
