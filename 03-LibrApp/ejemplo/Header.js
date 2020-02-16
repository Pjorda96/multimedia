import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

const Header = ({ balance, balanceInProgress, refresh }) => (
  <View style={styles.header}>
    <View style={styles.menu}>
      <Text style={styles.burguerMenu}>PmB</Text>
    </View>

    <View style={styles.brand}>
      <Text style={styles.bText}>Place my bet</Text>
    </View>

    <View style={styles.balance}>
      {
        balanceInProgress
          ? <ActivityIndicator size="small" color="#fff" />
          : <Text style={styles.balButton} onPress={() => refresh()}>
              {balance || 0} €
            </Text>
      }
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#85BB65',
    flexDirection: 'row',
    height: 60,
  },
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  burguerMenu: {
    color: 'white',
    fontSize: 20,
  },
  brand: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  balance: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balButton: {
    color: 'white',
    fontSize: 15,
  },
});

export default Header;
