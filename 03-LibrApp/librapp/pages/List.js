import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { getLibrary } from '../storage/library';
import Book from '../components/Book';

export default class List extends Component {
  static navigationOptions = {
    title: 'Listado',
  };

  state = {
    library: [],
  };

  componentDidMount(): void {
    this.update();
  }

  update() {
    const library = getLibrary();
    this.setState({ library });
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
        <NavigationEvents
          onWillFocus={() => this.update()}
        />
        <SafeAreaView style={styles.main}>
          <ScrollView>
            <View>
              {this.state.library.map(item => (
                <Book key={item.id} navigate={navigate} {...item} />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#C57C33',
    height: '100%',
  }
});
