/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

import { ViewConstant } from './constants.js'

export default class App extends Component {
  state = {
    balance: 10.35,
    balanceInProgress: false,
    view: 0,
  }

  handleRefresh = this.handleRefresh.bind(this);
  balanceInProgress = this.balanceInProgress.bind(this);
  handleViewChange = this.handleViewChange.bind(this);

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
             >
              <View style={styles.body}>
                <Text>
                  {this.state.balance}
                  {
                    this.state.balanceInProgress
                      ? 'true'
                      : 'false'
                  }
                  {this.state.view ? 'favorites' : 'all'}
                </Text>
              </View>
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
