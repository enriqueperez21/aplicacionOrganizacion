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
  let accountSectionProps, expenseGestorSectionProps, registerSectionProps, RecordsSectionProps
  const navigateToAnd = (section, especific)=>{navigation.navigate(section, {screen: especific})}
  const accountTest = [
    {"name" : "Banco Pichincha", "mount" : 250, "icon" : "bank"},
    {"name" : "Banco Guayaquil", "mount" : 2.50, "icon" : "bank"},
    {"name" : "Efectivo", "mount" : 2.50, "icon" : "money"},
    {"name" : "Cooperativa", "mount" : 2.50, "icon" : "money"},
    {"name" : "Ahorros", "mount" : 2.50, "icon" : "money"}
  ]
  if(data != null){
    data = {...data, Accounts : accountTest}
    accountSectionProps = {...getSectionProps("Accounts","Group", navigateToAnd, "Group", "GroupNav"), accounts:data.Accounts}
    expenseGestorSectionProps = {...getSectionProps("ExpenseGestor", "Group", navigateToAnd, "CreateGestor", "New Category"), categories:data.UserExpenseCategory}
    registerSectionProps = getSectionProps("ExpenseGestor", "Group", navigateToAnd, "Group", "GroupNav")
    RecordsSectionProps = getSectionProps("ExpenseGestor", "Group", navigateToAnd, "Group", "GroupNav")
  }
  const props={
    accountSectionProps,
    expenseGestorSectionProps,
    registerSectionProps,
    RecordsSectionProps
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

const HomeScreen = ({data, props}) =>{
  return(
    <View style={styleScreen.container}>
        <Headbar ScreenName = {Texts.Headbar.Home} userName = {data.user.name} />
        <View style={styleScreen.screen}>
          <BalanceCard saldo = {"$195,45"}/>
          <AccountsSection      props = {props.accountSectionProps}/>
          <ExpenseGestorSection props = {props.expenseGestorSectionProps}/>
          <RegisterSection      props = {props.registerSectionProps}/>
          <RecordsSection       props = {props.RecordsSectionProps}/>
          <View style={styleScreen.spaceToSFooter}>
          </View>
        </View>
      </View>
  )
}

const getSectionProps = (sectionName, section, navigateToAnd, section2, especific2) => {
  const onPressPlus = navigateToAnd
  const onPressViewAll = navigateToAnd
  const onPressSection = (currentAccount)=>{console.log("Cuenta presionada ",currentAccount)}
  return {
    nameSection: Texts.HomeScreen[sectionName],
    viewAll: Texts.HomeScreen.ViewAll,
    onPressSection,
    onPressPlus,
    onPressViewAll,
    section,
    section2,
    especific2
  };
};