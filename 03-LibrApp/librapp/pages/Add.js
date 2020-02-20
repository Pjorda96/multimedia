import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import Form from '../components/Form';

export default class Add extends Component {
  static navigationOptions = {
    title: 'Añadir nuevo',
  };

  handleListNav = () => {
    this.props.navigation.navigate('List');
  };

  render() {
    return (
      <SafeAreaView style={styles.filters}>
        <Form buttonLabel='Añadir' callback={this.handleListNav} />
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  filters: {
    width: '100%',
  },
  element: {
    backgroundColor: 'red',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignItems: 'center',
  },
  search: {
    height: 40,
    width: '50%',
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
