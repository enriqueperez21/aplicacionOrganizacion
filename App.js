import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Second} from './app/screens/examples/SecondScreen';
import {Home} from './app/screens/examples/homeScreen';
import { cargarConfiguracion } from './app/DBconect';

const Stack = createNativeStackNavigator();
cargarConfiguracion()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeNav"   component={Home}   options={{ headerShown: false }}/>
        <Stack.Screen name="SecondNav" component={Second} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

