import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Headbar } from '../headBar/headBar';
import { styleScreen } from '../standard/screenView';
import { GroupCard } from '../Components/Category/groupComponents';
import { useData } from '../context/allDataContext';
import { Texts } from '../standard/Texts';
import { styleExpenseGestorScreen } from '../Components/Gestors/StyleExpenseGestor';


export const ExpenseGestorScreen = ({navigation}) => {
  const context = useData()
  const data = context.allData
  let categories
  if(data != null) categories = data.UserExpenseCategory
  return(
      <View style={styleScreen.container}>
        <Headbar ScreenName = "Home" userName = {data.user.name} />
        <View style={styleScreen.screen}>
          <View style={styleExpenseGestorScreen.spacePrincipleWord}>
            <Text style={styleExpenseGestorScreen.mainText}>{Texts.ExpenseGestorScreen.mainText}</Text>
          </View>
          <View style={styleExpenseGestorScreen.spaceToShowArray}>
                <FlatList
                  hidden={!categories || categories.length === 0}
                  visible={categories.length > 0}
                  data={categories}
                  renderItem={({ item }) => {
                    return (
                      <GroupCard category={item} navigation ={navigation} />
                    );
                  }}
                  keyExtractor={(item) => item._id}
                />
          </View>
          <View style={styleScreen.spaceToSFooter}>
          </View>
        </View>
      </View>
  )
}