import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ActivityIndicator,
} from 'react-native';

const Item = ({local, visitante, cantidad, cuota, favorito}) => (
  <View>
    <Text>{`${local} - ${visitante} - ${cantidad}`}</Text>
    <Text>text</Text>
  </View>
);

const styles = StyleSheet.create({

});

export default Item;
