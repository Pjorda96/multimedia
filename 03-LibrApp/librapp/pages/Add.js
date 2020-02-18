import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class Add extends Component {
  static navigationOptions = {
    title: 'Añadir nuevo',
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Añadir</Text>
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
});
