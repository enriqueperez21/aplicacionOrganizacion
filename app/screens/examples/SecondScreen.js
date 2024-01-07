import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { updateData, getAllDataUser } from '../../../callToDB';


export const Second = ({navigation}) => {
    return(
        <View style={styles.container}>
        <Text>Bienvenido a mi aplicación</Text>
        <Image 
            source={require('../../../foto.jpg')} 
            style={{ width: 300, height: 300, resizeMode: "contain" }}
        />
        <Button
            title='test'
            onPress={()=>{
                /* updateData("user", {
                    name: "Luis Pérez Señalin",
                    email: "enriqueperezse21@gmail.com",
                    id: "0705052728",
                    groups: [],
                }) */
                getAllDataUser("0705052728")
                navigation.goBack()
                }
            }
        />
        <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

