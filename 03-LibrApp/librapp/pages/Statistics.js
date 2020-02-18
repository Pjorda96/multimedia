import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class Statistics extends Component {
  static navigationOptions = {
    title: 'Estadísticas',
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Hello</Text>
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
});
