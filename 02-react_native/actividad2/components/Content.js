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
    const { data, view, toggleToFavorite } = this.props;

    return view === ViewConstant.FAVORITES
      ? data
          .filter(item => item.favorito === true)
          .map(item => <Item
                         { ...item }
                         key={item.id}
//                         toggleToFavorite={toggleToFavorite}
                       />)
      : data
          .map(item => <Item
                        { ...item }
                        key={item.id}
//                        toggleToFavorite={toggleToFavorite}
                       />);
  }

  render () {
    const { data } = this.props;

    return (
      <View style={styles.list}>
        {
          data.length
            ? this.renderList()
            : <ActivityIndicator size="large" color="black" />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
