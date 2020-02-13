import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Item from './Item';

import { ViewConstant } from '../constants.js'

export default class Content extends Component {
  renderList = this.renderList.bind(this);
  handleViewDetails = this.handleViewDetails.bind(this);

  renderList() {
    const { data, toggleToFavorite } = this.props;

    return data.map(item => <Item
          { ...item }
          key={item.id}
          toggleToFavorite={toggleToFavorite}
          handleViewDetails={this.handleViewDetails}
        />)
  }

  handleViewDetails(id) {
    const { viewDetails } = this.props;

    viewDetails(id);
  }

  render () {
    const { data } = this.props;

    return (
      <View style={styles.list}>
        {
          data && data.length
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
  fontSize: 20,
 },
});
