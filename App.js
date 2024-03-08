import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './app/screens/homeScreen';
import { Group } from "./app/screens/groupScreen";
import { DataProvider } from "./app/context/allDataContext";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ExpenseGestorScreen } from "./app/screens/expenseGestor";
import React from "react";
import { BlankScreen } from "./app/screens/blankScreen";
import { OrganizersScreen } from "./app/screens/organizersScreen";
import { NewGestorScreen } from "./app/screens/NewExpenseGestors.js/newGestor";
import { NewCategoryScreen } from "./app/screens/NewExpenseGestors.js/newCategoryScreen";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function CreateExpenseGestor() {
  return (<Stack.Navigator>
    <Stack.Screen name="GestorScreen" component={NewGestorScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="New Category" component={NewCategoryScreen} options={{ headerShown: false }}/>
  </Stack.Navigator>
)}

function ExpenseGestors() {
  return (<Stack.Navigator>
    <Stack.Screen name="Organizers" component={OrganizersScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="GroupNav" component={ExpenseGestorScreen} options={{ headerShown: false }}/>
  </Stack.Navigator>
)}

const Icon = ({ Name, color, size }) => (<FontAwesome5 name={Name} color={"black"} size={25} />)

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName={"Home"} screenOptions={{tabBarLabel: "",headerShown: false,}}>
        <Tab.Screen name="CreateGestor" component={CreateExpenseGestor} options={{tabBarIcon: ()=><Icon Name = {"folder-plus"}/>}}/>
        <Tab.Screen name="Group"        component={ExpenseGestors}      options={{tabBarIcon: ()=><Icon Name = {"folder-open"}/>}}/>
        <Tab.Screen name="Home"         component={Home}                options={{tabBarIcon: ()=><Icon Name = {"home"}/>}}/>
        <Tab.Screen name="Records"      component={BlankScreen}         options={{tabBarIcon: ()=><Icon Name = {"file-alt"}/>}}/>
        <Tab.Screen name="Test2"        component={BlankScreen}         options={{tabBarIcon: ()=><Icon Name = {"user"}/>}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}