import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { asyncSaveData } from "../../utils/utils";
import { addData } from "../../redux/action/action";

export default function Home(){
  const [data, setData] = useState("");
  const ListItems=useSelector((state)=>state.task.todoItems)
  const navigation = useNavigation();


  function saveData() {
    const newData ={
      id: Math.random(),
      name: data,
    }; 
    const updatedData = [...ListItems, newData];
    asyncSaveData(updatedData);
    addData(updatedData)
    setData('')
  }

    function getData(){
      navigation.navigate("UsersData");
    }

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
        TodoList
      </Text>
      <TextInput
        placeholder="enter task"
        style={{
          borderWidth: 1,
          fontSize: 15,
          margin: 20,
          padding: 2,
          borderRadius: 5,
        }}
        onChangeText={setData}
        value={data}
      />
      <TouchableOpacity onPress={() => saveData()}>
        <Text
          style={{
            backgroundColor: "green",
            color: "white",
            margin: 20,
            textAlign: "center",
            fontSize: 20,
            borderRadius: 5,
            padding: 5,
          }}
        >
          Save Data
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getData()}>
        <Text
          style={{
            backgroundColor: "blue",
            color: "white",
            margin: 20,
            textAlign: "center",
            fontSize: 20,
            borderRadius: 5,
            padding: 5,
          }}
        >
          Get Data
        </Text>
      </TouchableOpacity>
    </View>
  );
}
