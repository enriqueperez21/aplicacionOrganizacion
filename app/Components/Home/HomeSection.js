import { Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import { styleHomeScreen } from './styleHome';
import { AccountsCardSection, ExpenseGestorCardSection } from './HomeCards';
import { ButtonPlus } from '../../../assets/Buttons/Buttons';


const HeadSection = ({props, screenName}) =>{
  return(
    <View style={styleHomeScreen.sectionsHead}>
      <Text style={styleHomeScreen.sectionsText}>{props.nameSection}</Text>
      <TouchableOpacity 
      style={styleHomeScreen.center}
      onPress={()=>props.onPressViewAll(props.section, screenName)}>
        <Text style={styleHomeScreen.sectionsSmallText}>{props.viewAll}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const AccountsSection = ({props}) =>{
  return(
    <View style={[styleHomeScreen.sections, {flex: 1}]}>
      <HeadSection props = {props} screenName = {"GroupNav"}/>
      <AccountsCardSection accounts = {props.accounts} props = {props}/>
  </View>
)}

export const ExpenseGestorSection = ({props}) =>{
  return(
    <View style={[styleHomeScreen.sections, {flex: 1,}]}>
      <HeadSection props = {props} screenName = {"GroupNav"}/>
      <ExpenseGestorCardSection categories = {props.categories} props = {props}/>
  </View>
)}

export const RegisterSection = ({props}) =>{
  return(
    <View style={styleHomeScreen.sections}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={styleHomeScreen.sectionsText}>{props.nameSection}</Text>
        <ButtonPlus flex={0.5} props = {props}/>
      </View>
    </View>
)}

export const RecordsSection = ({props}) =>{
  return(
    <View style={[styleHomeScreen.sections, {flex: 1,}]}>
      <HeadSection props = {props} screenName = {"Organizers"}/>
  </View>
)}
