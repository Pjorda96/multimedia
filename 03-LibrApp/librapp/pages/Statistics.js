import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

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
