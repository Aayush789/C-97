import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';

export default class HomeScreen extends Component{
    render(){
        return(
            
            <View>
              
              <MyHeader navigation= {this.props.navigation}/> 
            
              <View style= {{justifyContent: 'center',alignItems: 'center'}}>
              
                <Image
          source= {require("../assets/hdfc.png")}
          style= {{width:280, height:50, alignItems: 'center', justifyContent:'center'}}
        />

        <Image
          source= {require("../assets/window.jpg")}
          style= {{width:280, height:50, alignItems: 'center', justifyContent:'center'}}
        />

        <Text style= {{marginTop: 250}}> Welcome to HDFC Bank window glazing</Text>

        <Image
          source= {require("../assets/hdfc.png")}
          style= {{marginTop: 50, width:280, height:50, alignItems: 'center', justifyContent:'center',}}
        />
            </View>
            </View>
            
        )
    }
} 


