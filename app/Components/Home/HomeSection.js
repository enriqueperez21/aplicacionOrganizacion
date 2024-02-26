import { Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import { styleBalanceCard, styleHomeScreen } from './styleHome';
import { Texts } from '../../standard/Texts';

export const BalanceCard = ({saldo}) => {
  return(
    <View style={styleBalanceCard.container}>
      <View style={styleBalanceCard.secondContainer}>
        <Text style={[styleBalanceCard.textSize, styleBalanceCard.textColor]}>{Texts.HomeScreen.TotalBalance}</Text>
        <Text style={[styleBalanceCard.textSize, styleBalanceCard.textColor]}>{saldo}</Text>
      </View>
    </View>
  )
}

const HeadSection = ({nameSection, viewAll}) =>{
  return(
    <View style={styleHomeScreen.sectionsHead}>
      <Text style={styleHomeScreen.sectionsText}>{nameSection}</Text>
      <TouchableOpacity 
        style={styleHomeScreen.center}
        onPress={()=>{/* */}}
      >
        <Text style={styleHomeScreen.sectionsSmallText}>{viewAll}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const AccountsSection = ({nameSection, viewAll}) =>{
  return(
    <View style={styleHomeScreen.sections}>
      <HeadSection nameSection={nameSection} viewAll={viewAll}/>
  </View>
)}

export const ExpenseGestorSection = ({nameSection, viewAll}) =>{
  return(
    <View style={styleHomeScreen.sections}>
      <HeadSection nameSection={nameSection} viewAll={viewAll}/>
  </View>
)}

export const RegisterSection = ({nameSection, viewAll}) =>{
  return(
    <View style={styleHomeScreen.sections}>
    <View style={styleHomeScreen.sectionsHead}>
      <Text style={styleHomeScreen.sectionsText}>{nameSection}</Text>
      <TouchableOpacity 
        style={styleHomeScreen.center}
        onPress={()=>{/* */}}
      >
        <Text style={styleHomeScreen.sectionsSmallText}>{viewAll}</Text>
      </TouchableOpacity>
    </View>
  </View>
)}

export const RecordsSection = ({nameSection, viewAll}) =>{
  return(
    <View style={styleHomeScreen.sections}>
      <HeadSection nameSection={nameSection} viewAll={viewAll}/>
  </View>
)}
