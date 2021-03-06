import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Filters from './Filters';

import { ViewConstant, FilterConstant } from '../constants.js'

export default class List extends Component {
  static navigationOptions = {
    title: 'Lista principal',
  };

  state = {
    balance: 10.35,
    balanceInProgress: false,
    view: ViewConstant.DEFAULT,
    filter: FilterConstant.NONE,
    word: '',
    data: [
      /*{
        id: 0,
        local: 'Valencia',
        visitante: 'Levante',
        apostado: 10,
        favorito: true,
      },
      {
        id: 1,
        local: 'Real Madrid',
        visitante: 'Barça',
        apostado: 5,
        favorito: true,
      },
      {
        id: 2,
        local: 'Atletico de Madrid',
        visitante: 'Getafe',
        apostado: 20,
        favorito: false,
      },
      {
        id: 3,
        local: 'Valencia',
        visitante: 'Levante',
        apostado: 10,
        favorito: true,
      },
      {
        id: 4,
        local: 'Real Madrid',
        visitante: 'Barça',
        apostado: 5,
        favorito: true,
      },
      {
        id: 5,
        local: 'Atletico de Madrid',
        visitante: 'Getafe',
        apostado: 20,
        favorito: false,
      },
      {
        id: 6,
        local: 'Valencia',
        visitante: 'Levante',
        apostado: 10,
        favorito: true,
      },
      {
        id: 7,
        local: 'Real Madrid',
        visitante: 'Barça',
        apostado: 5,
        favorito: true,
      },
      {
        id: 8,
        local: 'Atletico de Madrid',
        visitante: 'Getafe',
        apostado: 20,
        favorito: false,
      },*/
    ],
  };

  getApuestas = this.getApuestas.bind(this);
  handleRefresh = this.handleRefresh.bind(this);
  balanceInProgress = this.balanceInProgress.bind(this);
  handleViewChange = this.handleViewChange.bind(this);
  changeToFavorite = this.changeToFavorite.bind(this);
  toggleOrderFilter = this.toggleOrderFilter.bind(this);
  addWordFilter = this.addWordFilter.bind(this);
  resetFilters = this.resetFilters.bind(this);
  filterByFilters = this.filterByFilters.bind(this);
  filterContent = this.filterContent.bind(this);
  viewDetails = this.viewDetails.bind(this);

  componentDidMount() {
    this.getApuestas();
  }

  getApuestas(){
    const apuestas = 'https://gist.githubusercontent.com/Pjorda96/fea0d22baaedfade7506972b68d88d31/raw/e98fc18d3fac3e0cfbf0f3c12cb5df8df2c0b9e7/apuestas.json';

    return fetch(apuestas)
      .then(response => response.json())
      .then(responseJson => {
        const { apuestas } = responseJson;
        this.setState({ data: [...apuestas] });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  balanceInProgress() {
    const { balanceInProgress } = this.state;
    this.setState({ balanceInProgress: !balanceInProgress });
  }

  handleRefresh() {
    this.balanceInProgress();

    setTimeout(() => {
      this.balanceInProgress();
    }, 500);
  }

  handleViewChange(view = 0) {
    this.setState({ view });
  }

  changeToFavorite(id, favorito) {
    const { data } = this.state;

    data.map(item => (item.id === id) && (item.favorito = favorito));

    this.setState({...data});
  }

  toggleOrderFilter() {
    const { filter: filterState } = this.state;

    // si no hay filtro o es ascendente (FilterConstant.ASCENDING === 0)
    const filter = !filterState
      ? FilterConstant.DESCENDING
      : FilterConstant.ASCENDING;

    this.setState({filter});
  }

  addWordFilter(inputValue) {
    this.setState({word: inputValue});
  }

  resetFilters() {
    this.setState({
      filter: FilterConstant.NONE,
      word: '',
    });
  }

  filterByFilters() {
    const { data, word, filter } = this.state;
    let filtered = [...data];

    if (word) {
      filtered = data.filter(item =>
        item.local === word || item.visitante === word
      )
    }

    if (filter === FilterConstant.ASCENDING) {
      filtered = data.sort((item1, item2) => {
        return item1.apostado - item2.apostado;
      });
    }

    if (filter === FilterConstant.DESCENDING) {
      filtered = data.sort((item1, item2) => {
        return item1.apostado - item2.apostado;
      }).reverse();
    }

    return filtered;
  }

  filterContent() {
    const { data, view, filter, word } = this.state;

    const hasFilter = filter === FilterConstant.ASCENDING || filter === FilterConstant.DESCENDING || word;

    if (hasFilter) {
      return this.filterByFilters();
    }

    return view
      ? data.filter(item => item.favorito)
      : data;
  }

  viewDetails(id){
    const {navigate} = this.props.navigation;
    const [element] = this.state.data.filter(el => el.id === id);

    navigate('Details', { element })
  }

  render () {
    const { word, balance, balanceInProgress, view, filter } = this.state;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.main}>
          {/*<View>
            <Header
              balance={balance}
              balanceInProgress={balanceInProgress}
              refresh={this.handleRefresh}
            />
          </View>*/}

          <View>
            <Filters
              word={word}
              filter={filter}
              toggleOrderFilter={this.toggleOrderFilter}
              addWordFilter={this.addWordFilter}
              resetFilters={this.resetFilters}
            />
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.body}
           >
            <Content
              data={this.filterContent()}
              toggleToFavorite={this.changeToFavorite}
              viewDetails={this.viewDetails}
            />
          </ScrollView>
          <View>
            <Footer
              view={view}
              changeView={this.handleViewChange}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  body: {
    height: 'auto',
    backgroundColor: '#D3ECC4',
  },
});
