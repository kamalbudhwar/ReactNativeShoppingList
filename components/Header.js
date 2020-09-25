import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
const Header=({title})=>{
  return(
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  header:{
    height:100,
    paddingTop:20,
    backgroundColor:'darkslateblue' ,
    justifyContent:'center'
},
text:{
    color:'#fff',
    fontSize:23,
    textAlign:"center"
}
});
export default Header;