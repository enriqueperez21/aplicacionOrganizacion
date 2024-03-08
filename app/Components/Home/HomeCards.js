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

export const SectionView = ({array, RenderItem, props}) => {
  return(
    <View style={styleAccountCard.containerAll}>
      <View style={styleAccountCard.container}>
      <FlatList
          horizontal = {true}
          style={{flexDirection: "row", flex: 1}}
          contentContainerStyle={{ gap: 10 }}
          showsHorizontalScrollIndicator={false}
          data={array}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
        />
        <ButtonPlus props ={props}/>
      </View>
    </View>
  )
}

export const AccountsCardSection = ({accounts, props}) => {
  const RenderItem = ({ item }) => {
    return (
      <AccountCard accountProps = {item} props={props}/>
    );
  }
  return(
    <SectionView array={accounts} RenderItem={RenderItem} props= {props}/>
  )
}

export const AccountCard = ({accountProps, props}) => {
  return(
    <TouchableOpacity style={styleAccountCard.eachCard} onPress={()=>props.onPressSection(accountProps.name)}>
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

export const ExpenseGestorCardSection = ({categories, props}) =>{
  const RenderItem = ({ item }) => {
    item = {...item, icon : "home"}
    return (
      <ExpenseGestorCard category = {item} props= {props}/>
    );
  }
  return(
    <SectionView array={categories} RenderItem={RenderItem} props = {props}/>
  )
}

export const ExpenseGestorCard = ({category, props}) => {
  return(
    <TouchableOpacity style={styleAccountCard.eachCard2} onPress={()=>{props.onPressSection(category)}}>
      <View style={[styleAccountCard.secondContainer, {justifyContent: "center"}]}>
        <FontAwesome name= {category.icon} color={"black"} size={20} style={{alignItems: "center"}}/>
        <Text style={[styleAccountCard.textSize, styleAccountCard.textColor2, {marginLeft: 10}]}>{category.name}</Text>
      </View>
      <View style={styleAccountCard.secondContainer}>
        <Text style={[styleAccountCard.textSize, styleAccountCard.textColor2, {paddingRight: 10}]}>{category.timePeriod.period}</Text>
        <Text style={[styleAccountCard.textSize, styleAccountCard.textColor2]}>$ {category.monthlyBudget}</Text>
      </View>
    </TouchableOpacity>
  )
}