import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MyHeader from '../components/MyHeader';

import firebase from 'firebase';

export default class LogoutScreen extends Component{
    logout = () => {
        this.props.navigation.navigate('LoginScreen');
        firebase.auth().signOut();
    }
    render(){
        return(
            <View style= {{flex: 1, justigyContent: 'center',alignItems: 'center'}}>
             this.logout()
            </View>
        )
    }
} 