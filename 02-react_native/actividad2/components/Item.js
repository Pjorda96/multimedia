import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

const Item = ({id, local, visitante, importe, cuota, favorito, toggleToFavorite}) => (
  <View >
    <View style={styles.info}>
      <Text style={styles.match}>{`${local} - ${visitante}`}</Text>
      <Text style={styles.subinfo}>Cuota: {cuota}</Text>
      <Text style={styles.subinfo}>Importe: {importe}</Text>
    </View>

    <View>
      <TouchableWithoutFeedback style={[styles.button, favorito && styles.favorito]}>
        <Text
          onPress={() => toggleToFavorite(id, !favorito)}
        >
          F
        </Text>
      </TouchableWithoutFeedback>
    </View>
  </View>
);

const styles = StyleSheet.create({

});

export default Item;
