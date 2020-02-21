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
import {GENRES} from '../const';
import {getLibrary} from '../storage/library';
import {NavigationEvents} from 'react-navigation';

export default class Statistics extends Component {
  static navigationOptions = {
    title: 'Estadísticas',
  };

  state = {
    labels: [
      'Ciencia ficción',
      'Aventuras',
      'Policiaca',
      'Biográfica',
      'Terror',
      'Romántica'
    ],
    data: [],
  };

  chartConfig = {
    backgroundGradientFrom: "#C57C33",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#804000",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(46, 65, 134, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
  };

  componentDidMount(): void {
    this.update()
  }

  update() {
    const data = [];
    let total = 0;
    let sf = 0;
    let av = 0;
    let pol = 0;
    let bio = 0;
    let terr = 0;
    let rom = 0;

    getLibrary().map(item => {
      if (item.genre === GENRES[0].name) { total++; sf++; }
      else if (item.genre === GENRES[1].name) { total++; av++; }
      else if (item.genre === GENRES[2].name) { total++; pol++; }
      else if (item.genre === GENRES[3].name) { total++; bio++; }
      else if (item.genre === GENRES[4].name) { total++; terr++; }
      else if (item.genre === GENRES[5].name) { total++; rom++; }
      else { total++ }
    });

    data.push(sf/total);
    data.push(av/total);
    data.push(pol/total);
    data.push(bio/total);
    data.push(terr/total);
    data.push(rom/total);

    this.setState({
      data: [...data],
    }, () => console.log(this.state))
  }

  render() {
    return (
      <>
        <NavigationEvents
          onWillFocus={() => this.update()}
        />
        <SafeAreaView style={styles.main}>
          {
            this.state.data.length > 0 && <ProgressChart
              data={this.state}
              width={410}
              height={220}
              chartConfig={this.chartConfig}
              hideLegend={false}
            />
          }
        </SafeAreaView>
      </>
    );
  };
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#C57C33',
    height: '100%'
  }
});
