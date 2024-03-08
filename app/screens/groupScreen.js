import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View} from 'react-native';
import { Headbar } from '../headBar/headBar';
import { styleScreen } from '../standard/screenView';

export const Group = ({navigation }) => {
  return(
    <View style={styleScreen.container}>
      <Headbar ScreenName = "Group" userName = {userData.name}/>
      <View style={styleScreen.screen}>
        <View style={styleScreen.spacePrincipleWord}>
          <Text style={styleScreen.mainText}>{groupData.groupName}</Text>
        </View>
        <View style={styleScreen.spaceToShowArray}>
          {/* <FlatList
            data={accountsData}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>
                    {item.Bills[0].name}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          /> */}
          <Text>Hola</Text>
        </View>
        <View style={styleScreen.spaceToSFooter}>
        </View>
      </View>
    </View>
  );
};