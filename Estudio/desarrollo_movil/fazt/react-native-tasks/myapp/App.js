import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({navigation}) => ({ 
            title: 'Tasks App',
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: {color: '#fff'},
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("TaskFormScreen")}>
                <Text style={{color: '#ffffff', marginRight: 20, fontSize: 15}}>New</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} 
          options={{
            title: 'Create a new Task',
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
