import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import Library from '../storage/library';

export default class Details extends Component {
  static navigationOptions = {
    title: 'Detalles',
  };

  state = {};

  componentDidMount(): void {
    const navigation = this.props.navigation;
    const id = navigation.getParam('id');
    const [book] = Library.filter(item => item.id === id);

    this.setState({ ...book })
  }

  editBook() {
    const navigation = this.props.navigation;
    const { id } = this.state;

    navigation.navigate('Edit', { id })
  }

  deleteBook() {
    console.log('hello'); // TODO: delete
  }

  render() {
    const { title, author, gendre, pages, punct } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.match}>Título: {title}</Text>
        <Text style={styles.subinfo}>Autor: {author}</Text>
        { gendre && <Text style={styles.subinfo}>Género: {gendre}</Text> }
        { pages && <Text style={styles.subinfo}>Páginas: {pages}</Text> }
        { punct && <Text style={styles.subinfo}>Puntuación: {punct}</Text> }

        <View>
          <Button
            title="Editar"
            onPress={() => this.editBook()}
          />
          <Button
            title="Borrar"
            onPress={() => this.deleteBook()}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  match: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subinfo: {
    fontSize: 20,
  },
});
