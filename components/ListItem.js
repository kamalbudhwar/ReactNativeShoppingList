import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
const ListItem=({item})=>{
  return(
    <TouchableOpacity style={styles.listItem}>
        <View><Text>{item.text}</Text></View>
    </TouchableOpacity>
  );
}
const styles=StyleSheet.create({
  listItem:{
      padding:15,
      backgroundColor:'#f8f8f8',
      borderBottomWidth:1,
      borderColor:'#eee'
  }
});
export default ListItem;