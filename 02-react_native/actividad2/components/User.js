import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class User extends Component {
  static navigationOptions = {
    title: 'Pablo',
  };

  state = {
    userInfo: {
      name: 'Pablo',
      surname: 'Jordá García',
      email: 'pjorda96@gmail.com',
      age: 23,
      genre: 'M',
      favoriteTeam: 'Valencia',
    },
  };

  render () {
    const { name, surname, email, age, genre, favoriteTeam } = this.state.userInfo;

    return (
      <View style={styles.container}>
        <Text style={styles.name}>Nombre: {name}</Text>
        <Text style={styles.surname}>Apellidos: {surname}</Text>
        <Text style={styles.subinfo}>Email: {email}</Text>
        <Text style={styles.subinfo}>Edad: {age}</Text>
        <Text style={styles.subinfo}>Género: {genre === 'M' ? 'masculino' : 'femenino'}</Text>
        <Text style={styles.subinfo}>Equipo favorito: {favoriteTeam}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  surname: {
    fontSize: 30,
    marginBottom: 5,
  },
  subinfo: {
    fontSize: 20,
  },
});
