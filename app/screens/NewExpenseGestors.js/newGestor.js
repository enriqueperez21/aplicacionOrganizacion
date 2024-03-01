import { Button, Text, TouchableOpacity, View } from "react-native"
import { Headbar } from "../../headBar/headBar"
import { styleScreen } from "../../standard/screenView"
import { useData } from "../../context/allDataContext"
import { styleNewGestorScreen } from "../../Components/NewGestor/StyleNewGestor"

export const NewGestorScreen = ({navigation}) => {
  const context = useData()
  const data = context.allData
  const navigateToAnd = (section, especific)=>{navigation.navigate(section, {screen: especific})}
  return(
      <View style={styleScreen.container}>
        <Headbar ScreenName = "Organizador" userName = {data.user.name} />
          <View style={styleScreen.screen}>
            <View style={styleNewGestorScreen.spacePrincipleWord}>
              <Text style={styleNewGestorScreen.mainText}>Crear nuevo gestor</Text>
            </View>
            <View style={styleNewGestorScreen.organizersSection}>
              <TouchableOpacity onPress={()=>{navigateToAnd("New Category")}}>
                <Text style = {styleNewGestorScreen.textSize}>Crear nueva cuenta</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigateToAnd("New Category")}}>
                <Text style = {styleNewGestorScreen.textSize}>Crear nuevo organizador</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
  )
}