import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "./src/screens/SignIn/SignIn";
import Home from "./src/screens/Home/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => null,
            headerRight: () => null,
            gesturesEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
