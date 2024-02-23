import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from './app/screens/homeScreen';
/* import { Group } from "./app/screens/groupScreen";
import { Account } from "./app/screens/accountScreen"; */
import { DataProvider } from "./app/context/allDataContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeNav"   component={Home}   options={{ headerShown: false }}/>
          {/* <Stack.Screen name="GroupNav" component={Group} options={{ headerShown: false }}/>
          <Stack.Screen name="AccountNav" component={Account} options={{ headerShown: false }}/> */}

        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

