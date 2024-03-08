import { Button, Text, TouchableOpacity, View } from "react-native"
import { styleScreen } from "../standard/screenView"
import { Headbar } from "../headBar/headBar"
import { useData } from "../context/allDataContext"
import { styleOrganizerScreen } from "../Components/Organizers/organizersStyle"

export const OrganizersScreen = ({navigation}) => {
  const context = useData()
  const data = context.allData
  const navigateToAnd = (section, especific)=>{navigation.navigate(section, {screen: especific})}
  return(
      <View style={styleScreen.container}>
        <Headbar ScreenName = "Organizador" userName = {data.user.name} />
          <View style={styleScreen.screen}>
            <View style={styleOrganizerScreen.spacePrincipleWord}>
              <Text style={styleOrganizerScreen.mainText}>Organizadores</Text>
            </View>
            <View style={styleOrganizerScreen.organizersSection}>
              <TouchableOpacity onPress={()=>{navigateToAnd("GroupNav")}}>
                <Text style = {styleOrganizerScreen.textSize}>Organizador de cuentas</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigateToAnd("GroupNav")}}>
                <Text style = {styleOrganizerScreen.textSize}>Organizar de gastos</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
  )
}