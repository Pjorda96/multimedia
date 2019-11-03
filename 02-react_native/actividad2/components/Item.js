import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Item = ({id, local, visitante, importe, cuota, favorito, /*toggleToFavorite*/}) => (
  <View style={styles.item}>
    <View style={styles.info}>
      <Text style={styles.match}>{`${local} - ${visitante}`}</Text>
      <Text style={styles.subinfo}>Cuota: {cuota}</Text>
      <Text style={styles.subinfo}>Importe: {importe}</Text>
    </View>

    <View style={styles.info}>
      <TouchableWithoutFeedback style={[styles.button, favorito && styles.favorito]}>
        <Text
//          onPress={() => toggleToFavorite(id, !favorito)}
        >
          {/*<FontAwesomeIcon icon={['far', 'star']} color="yellow" />*/}
          F
        </Text>
      </TouchableWithoutFeedback>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: .5,
    borderRadius: 5,
    margin: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  info: {
    padding: 8,
    fontWeight: 'bold',
  },
  subinfo: {
    fontSize: 12,
  },
  button: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: .5,
  },
  favorito: {
    backgroundColor: 'yellow',
  }
});

export default Item;
