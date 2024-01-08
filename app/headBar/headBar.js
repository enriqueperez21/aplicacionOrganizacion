import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { styleHeadBar } from '../standard/screenView';

export const Headbar = ({ScreenName, userName}) => {
    return (
      <View style={styleHeadBar.headBar}>
        <View style={styleHeadBar.screenInfo}>
          <Text style={styleHeadBar.TittleScreen}>
            {ScreenName}
          </Text>
        </View>
        <View style={styleHeadBar.userInfo}>
            <Text style={styleHeadBar.userName}>
                {userName}
            </Text>
            <Icon name="user" size={30} color="black" type="ant-design" style={{marginLeft: 10}} />
        </View>
      </View>
    );
};