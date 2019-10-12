/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// @flow

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

export default class App extends Component {
  state = {
    balance: 0,
    balanceInProgress: false,
  }

  handleRefresh = this.handleRefresh.bind(this);
  balanceInProgress = this.balanceInProgress.bind(this);

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

  render () {
    const { balance, balanceInProgress } = this.state;
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <Header
              balance={balance}
              balanceInProgress={balanceInProgress}
              refresh={this.handleRefresh}
            />
            <ScrollView
              contentInsetAdjustmentBehavior="automatic">
              <View>
                <Text>{this.state.balance}{
                  this.state.balanceInProgress
                    ? 'true'
                    : 'false'
                }</Text>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      );
  }
}

const styles = StyleSheet.create({
});
