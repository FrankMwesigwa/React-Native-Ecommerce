/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import Colors from '../constants/Colors';
import {Ionicons} from 'react-native-vector-icons/Ionicons';

import MealsDetails from '../screens/MealsDetails';
import MealsScreen from '../screens/MealsScreen';
import FavouritesScreen from '../screens/MealsFavs';

const mealsNavigator = createStackNavigator({
  MealsScreen,
  MealsDetails,
});

const favouritiesNavigator = createStackNavigator({
  MealsScreen,
  MealsDetails,
});

const mealsTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: mealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="md-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: {
        tabBarLabel: 'Cool Favourities!',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="md-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  },
);

const MainNavigator = createAppContainer(mealsTabNavigator);

export default MainNavigator;
