import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import List from './List';
import Details from './Details';
import User from './User';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#85BB65',
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
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions
  }
);

const UserNavigator = createStackNavigator(
  {
    User,
  },
  {
    initialRouteName: 'User',
    defaultNavigationOptions
  }
);

const Tabs = createBottomTabNavigator(
  {
    List: ListNavigator,
    User: UserNavigator
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: defaultNavigationOptions.headerStyle.backgroundColor,
        marginBottom: 7
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
