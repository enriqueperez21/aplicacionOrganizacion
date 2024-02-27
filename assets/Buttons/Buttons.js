import { TouchableOpacity, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { styleButtonPlus } from "./ButtonsStyle"

export const ButtonPlus = ({onPressFunction}) => {
  return(
    <TouchableOpacity
      style={styleButtonPlus.container}
      onPress={()=>onPressFunction}
    >
        <FontAwesome name= {"plus"} color={"black"} size={20} style={styleButtonPlus.iconContainer}/>
    </TouchableOpacity>
  )
}