import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { styleGroupCard } from './styleGroupCard';
import { useData } from '../context/allDataContext';

export const GroupCard = ({group, navigation}) => {
    const context = useData()
    const data = context.allData
    return(
        <TouchableOpacity 
            onPress={() => 
                navigation.navigate("GroupNav")
            }>
            <View style={styleGroupCard.container}>
                <View style={styleGroupCard.center}>
                    <Text style={styleGroupCard.groupTittle}>{group.name}</Text>
                </View>
                <View style={styleGroupCard.marginTop}>
                    <View><Text style={styleGroupCard.textSize}>Gastos</Text></View>
                    <View style={[styleGroupCard.rowContainer, styleGroupCard.rightSide]}>
                        <Text style={styleGroupCard.textSize}>{group.expectedExpense.minimum}</Text>
                        {group.expectedExpense.maximum == 0 ? (
                            <Text></Text>
                        ) : (
                            <Text style={styleGroupCard.textSize}> - {group.expectedExpense.maximum} </Text>
                        )}
                    </View>
                </View>
                <View>
                    <View><Text style={styleGroupCard.textSize}>{group.timePeriod.count} {group.timePeriod.period}</Text></View>
                    <View style={[styleGroupCard.rowContainer, styleGroupCard.rightSide]}>
                        {group.expectedResult.minimum < 0 ?(
                            <Text style={[styleGroupCard.textSize, {color: "red"}]}>{group.expectedResult.minimum} </Text>
                        ) :(
                            <Text style={[styleGroupCard.textSize, {color: "green"}]}>{group.expectedResult.minimum} </Text>
                        )}
                        <Text style={styleGroupCard.textSize}> / </Text>
                        {group.expectedResult.maximum == 0 ? (
                            <Text></Text>
                        ) : group.expectedResult.maximum < 0 ?(
                            <Text style={[styleGroupCard.textSize, {color: "red"}]}>{group.expectedResult.maximum} </Text>
                        ) :(
                            <Text style={[styleGroupCard.textSize, {color: "green"}]}>{group.expectedResult.maximum} </Text>
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