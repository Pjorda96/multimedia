import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { getLibrary, deleteBook } from '../storage/library';

export default class Details extends Component {
  static navigationOptions = {
    title: 'Detalles',
  };

  state = {};

  componentDidMount(): void {
    this.update();
  }

  update() {
    const navigation = this.props.navigation;
    const id = navigation.getParam('id');
    const [book] = getLibrary().filter(item => item.id === id);

    this.setState({ ...book })
  }

  handleEditBook() {
    const navigation = this.props.navigation;
    const { id } = this.state;

    navigation.navigate('Edit', { id })
  }

  handleDeleteBook() {
    const navigation = this.props.navigation;
    const { id } = this.state;

    deleteBook(id);
    navigation.navigate('List')
  }

  render() {
    const { title, author, genre, pages, punct } = this.state;

    return (
      <>
        <NavigationEvents
          onWillFocus={() => this.update()}
        />
        <SafeAreaView style={styles.container}>
          <Text style={styles.match}>Título: {title}</Text>
          <Text style={styles.subinfo}>Autor: {author}</Text>
          { genre && <Text style={styles.subinfo}>Género: {genre}</Text> }
          { pages && <Text style={styles.subinfo}>Páginas: {pages}</Text> }
          { punct && <Text style={styles.subinfo}>Puntuación: {punct}</Text> }

          <View>
            <Button
              title="Editar"
              onPress={() => this.handleEditBook()}
            />
            <Button
              title="Borrar"
              onPress={() => this.handleDeleteBook()}
            />
          </View>
        </SafeAreaView>
      </>
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
