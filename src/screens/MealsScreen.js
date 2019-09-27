import React from 'react';
import {View, Text, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealsScreen = props => {
  return (
    <View>
      <View>
        <Text>This is the meals details screen !!!!</Text>
        <Button
          title="Go to Details"
          onPress={() => props.navigation.navigate('MealsDetails')}
        />
      </View>
    </View>
  );
};

MealsScreen.navigationOptions = () => {
  return {
    headerTitle: 'Meals Screen',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourites"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark is the Favourite');
          }}
        />
        <Item
          title="Favourites"
          iconName="ios-star-outline"
          onPress={() => {
            console.log('Mark is the Favourite');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default MealsScreen;
