import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import  LoginScreen from './screens/LoginScreen'
import  HomeScreen from './screens/HomeScreen'
import  InventoryScreen from './screens/InventoryScreen'
import  SearchScreen from './screens/SearchScreen'
import  LogoutScreen from './screens/LogoutScreen'
import MyHeader from './components/MyHeader';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
   // <View style = {{marginTop: 200}}>
    <AppContainer/>
   // </View>
    
  );
}

const switchNavigator= createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  Drawer: {screen: AppDrawerNavigator},
})

const AppContainer= createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
