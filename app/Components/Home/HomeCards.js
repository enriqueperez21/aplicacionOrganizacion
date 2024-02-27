import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { styleAccountCard, styleBalanceCard } from "./styleHome"
import { Texts } from "../../standard/Texts"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { ButtonPlus } from "../../../assets/Buttons/Buttons"

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

export const SectionView = ({children}) => {
  return(
    <View style={styleAccountCard.containerAll}>
      <View style={styleAccountCard.container}>
        {children}
      </View>
    </View>
  )
}

export const AccountsCardSection = ({accounts, props}) => {
  return(
    <SectionView>
        <FlatList
          horizontal = {true}
          style={{flexDirection: "row", flex: 1}}
          contentContainerStyle={{ gap: 10 }}
          data={accounts}
          renderItem={({ item }) => {
            return (
                <AccountCard accountProps = {item} props={props}/>
            );
          }}
          keyExtractor={(item) => item.id}
        />
        <ButtonPlus/>
    </SectionView>
  )
}

export const AccountCard = ({accountProps, props}) => {
  return(
    <TouchableOpacity style={styleAccountCard.eachCard} onPress={()=>props.onPressAccount(accountProps.name)}>
      <View style={styleAccountCard.secondContainer}>
        <Text style={[styleAccountCard.textSize, styleAccountCard.textColor, {marginRight: 10}]}>{accountProps.name}</Text>
        <FontAwesome name= {accountProps.icon} color={"white"} size={20} style={{alignItems: "center"}}/>
      </View>
      <View style={styleAccountCard.secondContainer}>
        <FontAwesome name= "gear" color={"white"} size= {20} style={{justifyContent: "center", alignItems: "center"}} />
        <Text style={[styleAccountCard.textSize, styleAccountCard.textColor]}>$ {accountProps.mount}</Text>
      </View>
    </TouchableOpacity>
  )
}

export const ExpenseGestorCardSection = ({UserExpenseCategory}) =>{
  return(
    <SectionView>
      <FlatList
          horizontal = {true}
          style={{flexDirection: "row", flex: 1}}
          contentContainerStyle={{ gap: 10 }}
          data={UserExpenseCategory}
          renderItem={({ item }) => {
            return (
                <ExpenseGestorCard name = {item.name} period = {item.timePeriod.period} budget={item.monthlyBudget} icon = {"home"}/>
            );
          }}
          keyExtractor={(item) => item._id}
        />
        <ButtonPlus/>
    </SectionView>
  )
}

export const ExpenseGestorCard = ({name, period, icon, budget, color}) => {
  return(
    <TouchableOpacity style={styleAccountCard.eachCard}>
      <View style={styleAccountCard.secondContainer}>
        <FontAwesome name= {icon} color={"white"} size={20} style={{alignItems: "center"}}/>
        <Text style={[styleAccountCard.textSize, styleAccountCard.textColor, {marginLeft: 10}]}>{name}</Text>
      </View>
      <View style={styleAccountCard.secondContainer}>
        <Text style={[styleAccountCard.textSize, styleAccountCard.textColor]}>{period}</Text>
        <Text style={[styleAccountCard.textSize, styleAccountCard.textColor]}>$ {budget}</Text>
      </View>
    </TouchableOpacity>
  )
}