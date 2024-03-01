import { Button, Text, View } from "react-native"
import { styleScreen } from "../standard/screenView"

export const BlankScreen = ({navigation}) => {
  return(
      <View style={styleScreen.container}>
          <Text>Home page</Text>
          <Text>Probando</Text>
          <Button
          title='test'
          onPress={()=>{
              
              }
          }
      />
      </View>
  )
}