import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
const AddItem=({title})=>{
  return(
    <View>
        <TextInput placeholder="Add Item........" style={styles.input}></TextInput>
        <TouchableOpacity style={styles.btn}>
            <Text>Add Item</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles=StyleSheet.create({
 
});
export default AddItem;