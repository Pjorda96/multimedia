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

  state = {
    book: {},
  };

  componentDidMount(): void {
    const navigation = this.props.navigation;
    const id = navigation.getParam('id');
    const [book] = getLibrary().filter(item => item.id === id);

    this.setState({ book: {...book} })
  }

  handleDetailsNav = () => {
    const navigation = this.props.navigation;
    const id = navigation.getParam('id');
    this.props.navigation.navigate('Details', { id });
  };

  render() {
    const { book } = this.state;

    return (
      <SafeAreaView>
        {Object.keys(book).length > 0 && <Form buttonLabel='Editar' isEdit initialBook={book} callback={this.handleDetailsNav} />}
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
});
