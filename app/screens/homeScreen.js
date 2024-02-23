import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View} from 'react-native';
import { Headbar } from '../headBar/headBar';
import { styleScreen } from '../standard/screenView';
import { GroupCard } from '../Components/groupComponents';
import { useData } from '../context/allDataContext';


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
      <View style={styleScreen.container}>
      <Headbar ScreenName = "Home" userName = "Cargando..."/>
      <View style={styleScreen.screen}>
        <View style={styleScreen.spacePrincipleWord}>
          <Text style={styleScreen.mainText}>Grupo de cuentas</Text>
        </View>
        <View style={styleScreen.spaceToShowArray}>
            <Text>CARGANDO</Text>
        </View>
        <View style={styleScreen.spaceToSFooter}>
        </View>
      </View>
    </View>
    ):(
      <View style={styleScreen.container}>
        <Headbar ScreenName = "Home" userName = {data.user.name} />
        <View style={styleScreen.screen}>
          <View style={styleScreen.spacePrincipleWord}>
            <Text style={styleScreen.mainText}>Grupo de cuentas</Text>
          </View>
          <View style={styleScreen.spaceToShowArray}>
                <FlatList
                  hidden={!categories || categories.length === 0}
                  visible={categories.length > 0}
                  data={categories}
                  renderItem={({ item }) => {
                    return (
                      <GroupCard group={item} navigation ={navigation} />
                    );
                  }}
                  keyExtractor={(item) => item._id}
                />
          </View>
          <View style={styleScreen.spaceToSFooter}>
          </View>
        </View>
      </View>
    )}
    </View>
  )
}