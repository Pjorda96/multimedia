import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Details extends Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation.getParam('element'))

    return (
      <View>
        <Text>Hello</Text>
        <Text>Hello 2</Text>
      </View>
    )
  }
}
