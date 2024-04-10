import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home/Home";
import UsersData from "../Screens/UsersData";


const Stack=createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='UsersData' component={UsersData}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}