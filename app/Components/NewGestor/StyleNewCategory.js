import { StyleSheet } from "react-native";
import { colors } from "../../standard/screenView";
import { TextFont } from "../../standard/Texts";

export const styleNewCategoryScreen = StyleSheet.create({
  spacePrincipleWord:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText:{
    fontSize: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  form:{
    flex: 7,
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10
  },
  textSize: {
    fontSize: 20,
  }
});