import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator,} from 'react-navigation';
import WriteReviewScreen from './screens/WriteReviewScreen';
import ReadStoryScreen from './screens/ReadReviewScreen';
import WelcomeScreen from './screens/welcomescreen'
import SignUpScreen from './screens/signupscreen'
import HomeScreen from './screens/homescreen'
import CarsScreen from './screens/carssreen'
import BrandScreen from './screens/brandscreen'
import TeslaScreen from './screens/teslascreen'
import Model3Screen from './screens/model3screen'
import CompareScreen from './screens/comparescreen'

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer style={styles.container} />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
   WelcomeScreen: {screen: WelcomeScreen},
  CompareScreen: {screen: CompareScreen},
  HomeScreen: {screen: HomeScreen},
  SignUpScreen: {screen: SignUpScreen},
 
  ReadStoryScreen: {screen: ReadStoryScreen},
  CarsScreen: {screen: CarsScreen},
  BrandScreen: {screen: BrandScreen},
  TeslaScreen: {screen: TeslaScreen},
  Model3: {screen:Model3Screen }
})

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

