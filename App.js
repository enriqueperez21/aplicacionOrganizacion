import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './app/screens/homeScreen';
import { Group } from "./app/screens/groupScreen";
/* import { Account } from "./app/screens/accountScreen"; */
import { DataProvider } from "./app/context/allDataContext";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ExpenseGestorScreen } from "./app/screens/expenseGestor";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function ExpenseGestor() {
  return (<Stack.Navigator>
    <Stack.Screen name="GroupNav" component={Group} options={{ headerShown: false }}/>
    {/* <Stack.Screen name="AccountNav" component={Account} options={{ headerShown: false }}/> */}
  </Stack.Navigator>
)}

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel: "",headerShown: false,tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" color={"black"} size={15} />),}}/>
        <Tab.Screen name="Group" component={ExpenseGestorScreen} options={{tabBarLabel: "",headerShown: false,tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" color={"black"} size={15} />),}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}