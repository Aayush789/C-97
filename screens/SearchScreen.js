import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import MyHeader from '../components/MyHeader';
import DatePicker from "react-datepicker";
import firebase from 'firebase';

export default class SearchScreen extends Component{

    constructor(){
        super();
        this.state={
            userId: '',
            password:'',
            text: '',
        }
    }
    
    render(){
        return(
            <View style= {{ justigyContent: 'center',alignItems: 'center'}}>

<MyHeader navigation= {this.props.navigation}/> 

               <Image
          source= {require("../assets/hdfc.png")}
          style= {{width:280, height:50, alignItems: 'center', justifyContent:'center'}}
        />

<Image
          source= {require("../assets/window.jpg")}
          style= {{width:280, height:50, alignItems: 'center', justifyContent:'center'}}
        />

        <Text> Nc Code</Text>

<TextInput style={styles.name}
                placeholder= "User Name"
                placeHolderTextColor= "#ffff"
                onChangeText= {(text)=>{
                    this.setState({
                        userId:text
                    })
                }}/>

            <TextInput style={styles.loginBox}
                placeholder= "password"
                placeholderTextColor= "#ffff"
                secureTextEntry={true}
                onChangeText= {(text)=>{
                    this.setState({
                        password:text
                    })
                }}/> 

                <TouchableOpacity 
                style= {{height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 70}}
                onPress= {()=>{this.login(this.state.userId,this.state.password)}}>
                 <Text style= {{textAlign: 'center'}}>GO</Text>
                  </TouchableOpacity>

        
            </View>
        )
    }
} 

const styles= StyleSheet.create({
    container: {
        flex:100,
        backgroundolor: '#f8be85',
        alignItems:'center',
        justifyContent:'center'
    },
   
    loginBox:{
        width:220,
        height: 40,
        marginTop: 5,
        borderBottomWidth: 1.5,
        borderColor: '#ff8a65',
        borderWidth: 1,
        fontSize:20,
        margin:10,
        paddingLeft:10,
    },

    name:{
        width:220,
        height: 40,
        marginTop: 40,
        borderColor: '#ff8a65',
        borderWidth: 1,
        fontSize:20,
        margin:10,
        paddingLeft:10,
    },

})