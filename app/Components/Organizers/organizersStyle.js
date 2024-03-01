import { StyleSheet } from "react-native";
import { colors } from "../../standard/screenView";
import { TextFont } from "../../standard/Texts";

export const styleOrganizerScreen = StyleSheet.create({
  spacePrincipleWord:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText:{
    fontSize: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  textSize:{
    fontSize: 22,
    fontFamily: TextFont.fontFamily,
  },
  organizersSection:{
    flex: 6,
  },
  spaceToShowArray:{
    flex: 7,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
},
});