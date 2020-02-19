import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { getLibrary } from '../storage/library';
import Form from '../components/Form';

export default class Edit extends Component {
  static navigationOptions = {
    title: 'Editar',
  };

  state = {};

  componentDidMount(): void {
    const navigation = this.props.navigation;
    const id = navigation.getParam('id');
    const [book] = getLibrary().filter(item => item.id === id);

    this.setState({ book: {...book} })
  }

  render() {
    const { book } = this.state;

    return (
      <SafeAreaView>
        {book && <Form buttonLabel='Editar' isEdit initialBook={book} />}
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
});
