import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  ActivityIndicator,
} from 'react-native';

const Header: () => React$Node = ({ balance, balanceInProgress, refresh }) => {
  return (
    <View style={styles.Header}>
      <View style={styles.Menu}>
        <Text style={styles.BurguerMenu}>M</Text>
      </View>

      <View style={styles.Brand}>
        <Text style={styles.BText}>Place my bet</Text>
      </View>

      <View style={styles.Balance}>
        {
          balanceInProgress
            ? <ActivityIndicator size="small" color="#0000ff" />
            : (
                <Text style={styles.BalButton} onPress={() => refresh()}>
                  {balance} €
                </Text>
              )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#85BB65',
    flexDirection: 'row',
    height: 60,
  },
  Menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BurguerMenu: {
    color: 'white',
    fontSize: 20,
  },
  Brand: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  Balance: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BalButton: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;
