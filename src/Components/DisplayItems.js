import { View, Text ,TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { deleteData } from '../redux/action/action';
import { asyncRemoveData } from '../utils/utils';
import React from 'react'

export default function DisplayItems(props) {
    const items=props.item
    console.log(items,"jdhj")
    
    const removeTodoItem = async (key, id) => {
        try {
            await deleteData(id);
            await asyncRemoveData(key, id);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: 10 }}>
        <Text style={{ fontSize: 20 }}>{items.name}</Text>
        <TouchableOpacity onPress={() => removeTodoItem("DATA", items.id)}>
            <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
    </View>
  )
}