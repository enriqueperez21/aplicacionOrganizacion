import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Group } from "./app/screens/groupScreen";
import { Home } from './app/screens/homeScreen';
import { Account } from "./app/screens/accountScreen";
import { cargarConfiguracion } from './services/DBconect';
import { createDataObject } from './services/createDataObject';
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();
cargarConfiguracion();
createDataObject("0705052728");

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeNav"   component={Home}   options={{ headerShown: false }}/>
        <Stack.Screen name="GroupNav" component={Group} options={{ headerShown: false }}/>
        <Stack.Screen name="AccountNav" component={Account} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

