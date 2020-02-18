import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button, TouchableHighlight, TouchableWithoutFeedback,
} from 'react-native';

export default function Book(props) {
  const { id, title, author, navigate } = props;

  function viewDetails() {
    navigate('Details', { id })
  }

  return (
    <View style={styles.item}>
      <View style={styles.info}>
        <Text style={styles.match}>{title}</Text>
        <Text style={styles.subinfo}>{author}</Text>
      </View>

      <View style={[styles.info, styles.favorite]}>
        <TouchableWithoutFeedback
          style={styles.button}
        >
          <Button
            title="Ver detalles"
            onPress={() => viewDetails()}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderStyle: 'solid',
    borderColor: 'grey',
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
  favorite: {
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
