import React ,{useState} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
const App=()=>{
  const randomId=()=>{
    return Math.random();
  }
  const[items,setItems]=useState([
      {id:randomId(),text:'Milk'},
      {id:randomId(),text:'Eggs'},
      {id:randomId(),text:'Spinach'},
      {id:randomId(),text:'Bread'}]);
  return(
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <FlatList data={items} renderItem={({item})=><ListItem item={item}/>}/>
    </View>
  );
}
const styles=StyleSheet.create({
  

});
export default App;