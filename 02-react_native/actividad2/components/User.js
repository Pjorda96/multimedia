import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class User extends Component {
  static navigationOptions = {
    title: 'User',
  };

  state = {
    userInfo: {
      name: 'Pablo',
    },
  };

  render () {
    const { userInfo: { name } } = this.state;

    return (
      <View>
        <Text>{name}</Text>
        <Text>Hello 2</Text>
      </View>
    );
  }
}
