import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View} from 'react-native';
import { Headbar } from '../headBar/headBar';
import { styleScreen } from '../standard/screenView';
import { waitForData } from '../../services/createDataObject';
import { useEffect, useState } from 'react';

export const Group = ({navigation }) => {
  const [groupData, setGroupData] = useState(global.dataObject.accountGroups[0]);
  const [userData, setuserData] = useState(global.dataObject.user);
  const [accountsData, setaccountsData] = useState(global.dataObject.accounts);

  return(
    <View style={styleScreen.container}>
      <Headbar ScreenName = "Group" userName = {userData.name}/>
      <View style={styleScreen.screen}>
        <View style={styleScreen.spacePrincipleWord}>
          <Text style={styleScreen.mainText}>{groupData.groupName}</Text>
        </View>
        <View style={styleScreen.spaceToShowArray}>
          <FlatList
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
          />
        </View>
        <View style={styleScreen.spaceToSFooter}>
        </View>
      </View>
    </View>
  );
};