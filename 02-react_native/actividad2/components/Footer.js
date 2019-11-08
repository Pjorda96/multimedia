import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFutbol, faStar } from '@fortawesome/free-solid-svg-icons'

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
          <FontAwesomeIcon icon={faFutbol} color={view ? 'white' : '#85BB65'} size={25} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButtons}
          onPress={this.changeToFavorites}
        >
          <FontAwesomeIcon icon={faStar} color={view ? '#85BB65' : 'white'} size={25} />
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
});
