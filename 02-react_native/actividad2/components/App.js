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
    view: ViewConstant.DEFAULT,
    data: [
      {
        id: 0,
        local: 'Valencia',
        visitante: 'Levante',
        importe: 10,
        cuota: 1.10,
        favorito: true,
      },
      {
        id: 1,
        local: 'Real Madrid',
        visitante: 'Barça',
        importe: 5,
        cuota: 2,
        favorito: true,
      },
      {
        id: 2,
        local: 'Atletico de Madrid',
        visitante: 'Getafe',
        importe: 20,
        cuota: 2.15,
        favorito: false,
      },
      {
        id: 3,
        local: 'Valencia',
        visitante: 'Levante',
        importe: 10,
        cuota: 1.10,
        favorito: true,
      },
      {
        id: 4,
        local: 'Real Madrid',
        visitante: 'Barça',
        importe: 5,
        cuota: 2,
        favorito: true,
      },
      {
        id: 5,
        local: 'Atletico de Madrid',
        visitante: 'Getafe',
        importe: 20,
        cuota: 2.15,
        favorito: false,
      },
      {
        id: 6,
        local: 'Valencia',
        visitante: 'Levante',
        importe: 10,
        cuota: 1.10,
        favorito: true,
      },
      {
        id: 7,
        local: 'Real Madrid',
        visitante: 'Barça',
        importe: 5,
        cuota: 2,
        favorito: true,
      },
      {
        id: 8,
        local: 'Atletico de Madrid',
        visitante: 'Getafe',
        importe: 20,
        cuota: 2.15,
        favorito: false,
      },
    ],
  }

  handleRefresh = this.handleRefresh.bind(this);
  balanceInProgress = this.balanceInProgress.bind(this);
  handleViewChange = this.handleViewChange.bind(this);
  changeToFavorite = this.changeToFavorite.bind(this);
  filterContent = this.filterContent.bind(this);

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

  changeToFavorite(id, favorito) {
    const { data } = this.state;

    data.map(item => (item.id === id) && (item.favorito = favorito));

    this.setState({data});
  }

  filterContent() {
    const { data, view } = this.state;

    return view
      ? data.filter(item => item.favorito)
      : data;
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
              data={this.filterContent()}
              toggleToFavorite={this.changeToFavorite}
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
    backgroundColor: '#D3ECC4',
  },
});
