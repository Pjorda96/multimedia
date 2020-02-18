import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import List from './pages/List';
import Details from './pages/Details';
import Edit from './pages/Edit';

import Add from './pages/Add';

import Statistics from './pages/Statistics';


const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#804000',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
};

const ListNavigator = createStackNavigator(
  {
    List,
    Details,
    Edit,
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions
  }
);

const AddNavigator = createStackNavigator(
  {
    Add,
  },
  {
    initialRouteName: 'Add',
    defaultNavigationOptions
  }
);

const StatisticsNavigator = createStackNavigator(
  {
    Statistics,
  },
  {
    initialRouteName: 'Statistics',
    defaultNavigationOptions
  }
);

const Tabs = createBottomTabNavigator(
  {
    Lista: ListNavigator,
    Añadir: AddNavigator,
    Estadísticas: StatisticsNavigator,
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: defaultNavigationOptions.headerStyle.backgroundColor,
        marginBottom: 7,
      }
    }
  }
);

const AppContainer = createAppContainer(Tabs);

export default class App extends Component {
  render(){
    return <AppContainer/>
  }
}
