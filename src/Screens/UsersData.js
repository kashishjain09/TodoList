import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { useSelector} from 'react-redux';
import React from 'react';
import DisplayItems from '../Components/DisplayItems';

export default function UsersData() {
    const todoDataItems = useSelector((state) => state.task.todoItems);

    return (
        <View>
            <FlatList
                data={todoDataItems}
                renderItem={({ item }) => (
                    <DisplayItems item={item}/>
                )}
                ListEmptyComponent={() => {
                    return <Text style={{fontSize:20,color:'red',paddingLeft:120,marginTop:10}}>No Data Found!!</Text>;
                  }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}