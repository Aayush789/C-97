import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import MyHeader from '../components/MyHeader';
import DropdownMenu from 'react-native-dropdown-menu';
import firebase from 'firebase';
import db from '../Config'

export default class InventoryScreen extends Component{
    constructor(){
        super();
        this.state= {
            text: '',
            code: 0,
            allDetails: []
        }
        this.requestRef= null
    }

    getDetails= ()=>{
        this.requestRef= db.collection("Branch").where("BranchCode", "==", this.state.code)
        .where("branchLocation", "==", this.state.text)
        .onSnapshot((snapshot)=>{
            var allDetails= []
            snapshot.docs.map((doc)=>{
                var details= doc.data()
                allDetails.push(details)
            }) 

            this.setState({
                allDetails: allDetails
            })
        })
    }
      
    render(){

        var data= [[ "Select", "Branch", "Maharashtra"]]

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

       

<View style ={{marginTop: 150}}>

<Text> Search </Text>

<DropdownMenu
    style={{flex: 0.5}}
    bgColor={'grey'}
    tintColor={'#000000'}
    activityTintColor={'red'}
    handler={(selection, row) => this.setState({text: data[selection][row]})}
    data={data}
    >
</DropdownMenu>

<Text> Enter Branch Code</Text>

<TextInput style={styles.loginBox}
                placeholder= "code"
                placeholderTextColor= "#ffff"
                onChangeText= {(text)=>{
                    this.setState({
                       code:text
                    })
                }}/> 

<TouchableOpacity 
                style= {{height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 70}}
                onPress= {()=>{
                    this.getDetails(this.state.code,this.state.text)

                    }}>
                 <Text style= {{textAlign: 'center'}}>GO</Text>
                </TouchableOpacity>

</View>

<FlatList
        data= {this.state.allDetails}
        renderItem= {({item})=>(
            <View style= {{borderBottomWidth: 2}}>

        <Text> {item.BranchCode}</Text>
        <Text> {item.branchName}</Text>
        <Text> {item.branchLocation}</Text>
                </View>

        )}

        keyExtractor= {(item,index)=>index.toString()}
        />


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