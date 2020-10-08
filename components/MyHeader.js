import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Header, Icon} from 'react-native-elements' 

class MyHeader extends React.Component{
    render(){
      return(
        <View style = {styles.textConatiner}>
          
          <Header 
          leftComponent= {<Icon name ='bars' type= 'font-awsome' color= '#696969'  onPress={()=>this.props.navigation.toggleDrawer()}/>}
          />

        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    textConatiner:{
      backgroundColor:'#fff',
      marginTop: 30,
    },
  })
  export default MyHeader;