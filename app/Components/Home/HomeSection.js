import { Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import { styleHomeScreen } from './styleHome';
import { AccountsCardSection, ExpenseGestorCardSection } from './HomeCards';
import { ButtonPlus } from '../../../assets/Buttons/Buttons';


const HeadSection = ({nameSection, viewAll, onPressFunction}) =>{
  return(
    <View style={styleHomeScreen.sectionsHead}>
      <Text style={styleHomeScreen.sectionsText}>{nameSection}</Text>
      <TouchableOpacity 
      style={styleHomeScreen.center}
      onPress={()=>onPressFunction}>
        <Text style={styleHomeScreen.sectionsSmallText}>{viewAll}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const AccountsSection = ({props}) =>{
  return(
    <View style={[styleHomeScreen.sections, {flex: 1}]}>
      <HeadSection nameSection={props.nameSection} viewAll={props.viewAll}/>
      <AccountsCardSection accounts = {props.accounts} props = {props}/>
  </View>
)}

export const ExpenseGestorSection = ({nameSection, viewAll, UserExpenseCategory}) =>{
  return(
    <View style={[styleHomeScreen.sections, {flex: 1,}]}>
      <HeadSection nameSection={nameSection} viewAll={viewAll}/>
      <ExpenseGestorCardSection UserExpenseCategory = {UserExpenseCategory}/>
  </View>
)}

export const RegisterSection = ({nameSection, viewAll}) =>{
  return(
    <View style={styleHomeScreen.sections}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={styleHomeScreen.sectionsText}>{nameSection}</Text>
        <ButtonPlus/>
      </View>
    </View>
)}

export const RecordsSection = ({nameSection, viewAll}) =>{
  return(
    <View style={[styleHomeScreen.sections, {flex: 1,}]}>
      <HeadSection nameSection={nameSection} viewAll={viewAll}/>
  </View>
)}
