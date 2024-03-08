import { TouchableOpacity, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { styleButtonPlus } from "./ButtonsStyle"

export const ButtonPlus = ({props, flex}) => {
  return(
    <TouchableOpacity
      style={[styleButtonPlus.container, {flex: flex}]}
      onPress={()=>{props.onPressPlus(props.section2, props.especific2)}}
    >
        <FontAwesome name= {"plus"} color={"black"} size={20} style={styleButtonPlus.iconContainer}/>
    </TouchableOpacity>
  )
}