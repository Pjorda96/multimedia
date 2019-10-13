import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';

import { ViewConstant } from '../constants.js'

export default class Footer extends Component {
  changeToAll = this.changeToAll.bind(this);
  changeToFavorites = this.changeToFavorites.bind(this);

  changeToAll() {
    this.props.changeView();
  }

  changeToFavorites() {
    this.props.changeView(ViewConstant.FAVORITES);
  }

  render() {
    const { view } = this.props;

    return (
      <View style={styles.footer}>
        <TouchableHighlight
          style={styles.bottomButtons}
          onPress={this.changeToAll}
        >
          <Text style={[styles.footerText, view || styles.active]}>Todos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButtons}
          onPress={this.changeToFavorites}
        >
          <Text style={[styles.footerText, view && styles.active]}>Favoritos</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1a2a11',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtons: {
    alignItems:'center',
    justifyContent: 'center',
    flex: 1,
  },
  footerText: {
    color: 'white',
    fontSize: 25,
    fontWeight:'bold',
  },
  active: {
    color: '#85BB65',
  },
});
