import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Item from './Item';

import { ViewConstant } from '../constants.js'

export default class Content extends Component {
  renderList = this.renderList.bind(this);

  renderList() {
    const { data, toggleToFavorite } = this.props;

    return data.map(item => <Item
          { ...item }
          key={item.id}
          toggleToFavorite={toggleToFavorite}
        />)
  }

  render () {
    const { data } = this.props;

    return (
      <View style={styles.list}>
        {
          data.length
            ? this.renderList()
            : <Text style={styles.empty}>No favorites yet</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
 empty: {
  alignSelf: 'center',
  marginTop: 20,
  fontSize: 20,
 },
});
