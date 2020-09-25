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
  const deleteItem=(id)=>{
      setItems((prevItems)=>{
        return prevItems.filter((item)=>item.id!=id);
      })
  }
  return(
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <FlatList data={items} keyExtractor={item=>item.id} renderItem={({item})=><ListItem item={item} deleteItem={deleteItem}/>}/>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
   
  },

});
export default App;