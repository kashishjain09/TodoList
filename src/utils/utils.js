import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncSaveData = async (updatedData) => {
  try {
    await AsyncStorage.setItem("DATA", JSON.stringify(updatedData));
  } catch (err) {
    console.log(err);
  }
};

export const  asyncGetData = async () => {
    try {
      const value = await AsyncStorage.getItem("DATA");
      return value
    } catch (err) {
      console.log(err);
    }
};
export const asyncRemoveData = async (key, itemIdToRemove) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    let items = [];
    items = JSON.parse(jsonValue);
    const indexToRemove = items.findIndex((item) => item.id === itemIdToRemove);
    items.splice(indexToRemove, 1);
    await AsyncStorage.setItem(key, JSON.stringify(items));
  } catch (error) {
    console.error(error); 
  }
}
