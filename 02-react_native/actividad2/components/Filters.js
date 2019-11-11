import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSortUp, faSortDown, faArrowsAltV, faTimes } from '@fortawesome/free-solid-svg-icons'

import { ViewConstant, FilterConstant } from '../constants.js'

export default class Filters extends Component {

  filterIcon = this.filterIcon.bind(this);

  filterIcon() {
    const {filter} = this.props;

    if (filter === FilterConstant.NONE) return faArrowsAltV;
    else if (filter === FilterConstant.DESCENDING) return faSortDown;
    else if (filter === FilterConstant.ASCENDING) return faSortUp;
  }

  render() {
    const { word, filter, addWordFilter, toggleOrderFilter, resetFilters } = this.props;

    const hasFilter = filter === FilterConstant.DESCENDING
      || filter === FilterConstant.ASCENDING
      || word;

    return (
      <View style={styles.filters}>
        <TextInput
          style={styles.search}
          onChangeText={text => addWordFilter(text)}
        />
        <TouchableHighlight
          style={styles.buttons}
          onPress={toggleOrderFilter}
          value={word}
        >
          <FontAwesomeIcon icon={this.filterIcon()} style={styles.buttonsContent} size={30} />
        </TouchableHighlight>

        {/*{
          hasFilter && (*/}
            <TouchableHighlight
              style={styles.buttons}
              onPress={resetFilters}
            >
              <FontAwesomeIcon icon={faTimes} style={styles.buttonsContent} size={30} />
            </TouchableHighlight>
          {/*)
        }*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filters: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  search: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: .5,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 'auto',
  },
  buttons: {
    borderColor: 'gray',
    borderWidth: .5,
    borderRadius: 5,
    marginHorizontal: 3,
    height: 40,
    width:40,
  },
  buttonsContent: {
    display: 'flex',
    alignSelf: 'center',
    color: 'gray',
  }
});
