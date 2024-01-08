import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { styleGroupCard } from './styleGroupCard';

export const GroupCard = ({group, navigation}) => {
    return(
        <TouchableOpacity 
            onPress={() => 
                navigation.navigate("GroupNav")
            }>
            <View style={styleGroupCard.container}>
                <View style={styleGroupCard.center}>
                    <Text style={styleGroupCard.groupTittle}>{group.groupName}</Text>
                </View>
                <View style={styleGroupCard.marginTop}>
                    <View><Text style={styleGroupCard.textSize}>Gastos</Text></View>
                    <View style={[styleGroupCard.rowContainer, styleGroupCard.rightSide]}>
                        <Text style={styleGroupCard.textSize}>{group.bills[0]}</Text>
                        {group.bills[1] == 0 ? (
                            <Text></Text>
                        ) : (
                            <Text style={styleGroupCard.textSize}> - {group.bills[1]} </Text>
                        )}
                    </View>
                </View>
                <View>
                    <View><Text style={styleGroupCard.textSize}>{group.Time.amount} {group.Time.Period}</Text></View>
                    <View style={[styleGroupCard.rowContainer, styleGroupCard.rightSide]}>
                        {group.result[0] < 0 ?(
                            <Text style={[styleGroupCard.textSize, {color: "red"}]}>{group.result[0]} </Text>
                        ) :(
                            <Text style={[styleGroupCard.textSize, {color: "green"}]}>{group.result[0]} </Text>
                        )}
                        <Text style={styleGroupCard.textSize}> / </Text>
                        {group.result[1] == 0 ? (
                            <Text></Text>
                        ) : group.result[1] < 0 ?(
                            <Text style={[styleGroupCard.textSize, {color: "red"}]}>{group.result[1]} </Text>
                        ) :(
                            <Text style={[styleGroupCard.textSize, {color: "green"}]}>{group.result[1]} </Text>
                        )}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
  });