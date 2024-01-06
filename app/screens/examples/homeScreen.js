import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View} from 'react-native';

export const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Home page</Text>
            <Text>Probando</Text>
            <Button
            title='test'
            onPress={()=>{
                navigation.navigate("SecondNav")
                }
            }
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });