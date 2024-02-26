import { Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import { Headbar } from '../headBar/headBar';
import { styleScreen } from '../standard/screenView';
import { useData } from '../context/allDataContext';
import { Texts } from '../standard/Texts';
import { styleHomeScreen } from '../Components/Home/styleHome';
import { AccountsSection, BalanceCard, ExpenseGestorSection, RecordsSection, RegisterSection } from '../Components/Home/HomeSection';

export const Home = ({navigation}) => {
  const context = useData()
  const data = context.allData
  let categories
  if(data != null){
    categories = data.UserExpenseCategory
  }
  return(
    <View style={{flex: 1}}>
    {(data == null) ? (
      <LoadScreen/>
    ):(
      <HomeScreen data = {data} navigation = {navigation}/>
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

const HomeScreen = ({data, navigation}) =>{
  return(
    <View style={styleScreen.container}>
        <Headbar ScreenName = {Texts.Headbar.Home} userName = {data.user.name} />
        <View style={styleScreen.screen}>
          <BalanceCard saldo = {"$190,45"}/>
          <AccountsSection nameSection={Texts.HomeScreen.Accounts} viewAll={Texts.HomeScreen.ViewAll}/>
          <ExpenseGestorSection nameSection={Texts.HomeScreen.ExpenseGestor} viewAll={Texts.HomeScreen.ViewAll}/>
          <RegisterSection nameSection={Texts.HomeScreen.ExpenseGestor} viewAll={Texts.HomeScreen.ViewAll}/>
          <RecordsSection nameSection={Texts.HomeScreen.ExpenseGestor} viewAll={Texts.HomeScreen.ViewAll}/>
          <View style={styleScreen.spaceToSFooter}>
          </View>
        </View>
      </View>
  )
}