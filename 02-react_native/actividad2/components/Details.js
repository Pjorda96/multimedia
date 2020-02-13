import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Details extends Component {
  render() {
    const { navigation } = this.props;
    const { local, visitante, apostado } = navigation.getParam('element');

    return (
      <View style={styles.container}>
        <Text style={styles.match}>Partido: {local} - {visitante}</Text>
        <Text style={styles.subinfo}>Apuesta: {local}</Text>
        <Text style={styles.subinfo}>Dinero apostado: {apostado}€</Text>
        <Text style={styles.subinfo}>Cuota: 1.50</Text>
      </View>
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
