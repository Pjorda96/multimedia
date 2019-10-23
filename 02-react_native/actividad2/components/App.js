import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import { ViewConstant } from '../constants.js'

export default class App extends Component {
  state = {
    balance: 10.35,
    balanceInProgress: false,
    view: 0,
  }

  data = [
    {
      local: 'Valencia',
      visitante: 'Levante',
      cantidad: 10,
      cuota: 1.10,
      favorito: true,
    },
    {
      local: 'Real Madrid',
      visitante: 'Barça',
      cantidad: 5,
      cuota: 2,
      favorito: true,
    },
    {
      local: 'Atletico de Madrid',
      visitante: 'Getafe',
      cantidad: 20,
      cuota: 2.15,
      favorito: false,
    },
  ];

  handleRefresh = this.handleRefresh.bind(this);
  balanceInProgress = this.balanceInProgress.bind(this);
  handleViewChange = this.handleViewChange.bind(this);
  changeToFavorite = this.changeToFavorite.bind(this);

  balanceInProgress() {
    const { balanceInProgress } = this.state;
    this.setState({ balanceInProgress: !balanceInProgress });
  }

  handleRefresh() {
    this.balanceInProgress();

    setTimeout(() => {
      this.balanceInProgress();
    }, 500);
  }

  handleViewChange(view = 0) {
    this.setState({ view });
  }

  changeToFavorite(favorito = false) {
    this.setState({ favorito });
  }

  render () {
    const { balance, balanceInProgress, view } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.main}>
          <View>
            <Header
              balance={balance}
              balanceInProgress={balanceInProgress}
              refresh={this.handleRefresh}
            />
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.body}
           >
            <Content
              data={this.data}
              view={view}
              changeToFavorite={this.changeToFavorite}
            />
          </ScrollView>
          <View>
            <Footer
              view={view}
              changeView={this.handleViewChange}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  body: {
    height: 'auto',
  },
});
