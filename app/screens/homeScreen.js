import { Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import { Headbar } from '../headBar/headBar';
import { styleScreen } from '../standard/screenView';
import { useData } from '../context/allDataContext';
import { Texts } from '../standard/Texts';
import { AccountsSection, ExpenseGestorSection, RecordsSection, RegisterSection } from '../Components/Home/HomeSection';
import { BalanceCard } from '../Components/Home/HomeCards';

export const Home = ({navigation}) => {
  const context = useData()
  let data = context.allData
  let categories
  let accountSectionProps
  const accountTest = [
    {"name" : "Banco Pichincha", "mount" : 250, "icon" : "bank"},
    {"name" : "Banco Guayaquil", "mount" : 2.50, "icon" : "bank"},
    {"name" : "Efectivo", "mount" : 2.50, "icon" : "money"},
    {"name" : "Cooperativa", "mount" : 2.50, "icon" : "money"},
    {"name" : "Ahorros", "mount" : 2.50, "icon" : "money"}
  ]
  if(data != null){
    categories = data.UserExpenseCategory
    data = {...data, accounts : accountTest}
    accountSectionProps = {
      nameSection:Texts.HomeScreen.Accounts, viewAll:Texts.HomeScreen.ViewAll, accounts:data.accounts, onPressAccount:(currentAccount)=>{console.log("Cuenta presionada ",currentAccount)}
    }
  }
  const props={
    accountSectionProps,
  }
  return(
    <View style={{flex: 1}}>
    {(data == null) ? (
      <LoadScreen/>
    ):(
      <HomeScreen data = {data} navigation = {navigation} props = {props}/>
    )}
    </View>
  )
}

const LoadScreen = () =>{
  return(
    <View style={styleScreen.container}>
      <Headbar ScreenName = {Texts.Headbar.Home} userName = {Texts.LoadStatus.Load}/>
      <View style={styleScreen.screen}>
        <View style={styleScreen.spaceToShowArray}>
            <Text>{Texts.LoadStatus.Load}</Text>
        </View>
        <View style={styleScreen.spaceToSFooter}>
        </View>
      </View>
    </View>
  )
}

const HomeScreen = ({data, navigation, props}) =>{
  return(
    <View style={styleScreen.container}>
        <Headbar ScreenName = {Texts.Headbar.Home} userName = {data.user.name} />
        <View style={styleScreen.screen}>
          <BalanceCard saldo = {"$195,45"}/>
          <AccountsSection props = {props.accountSectionProps}/>
          <ExpenseGestorSection nameSection={Texts.HomeScreen.ExpenseGestor} viewAll={Texts.HomeScreen.ViewAll} UserExpenseCategory= {data.UserExpenseCategory}/>
          <RegisterSection nameSection={Texts.HomeScreen.expenseRegister} viewAll={Texts.HomeScreen.ViewAll}/>
          <RecordsSection nameSection={Texts.HomeScreen.ExpenseRecords} viewAll={Texts.HomeScreen.ViewAll}/>
          <View style={styleScreen.spaceToSFooter}>
          </View>
        </View>
      </View>
  )
}