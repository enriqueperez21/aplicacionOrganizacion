import { StyleSheet } from "react-native";
import { colors } from "../../standard/screenView";
import { TextFont } from "../../standard/Texts";

export const styleHomeScreen = StyleSheet.create({
  sections:{
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sectionRegister:{
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sectionsHead:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionsText:{
    fontSize: 22,
    fontFamily: TextFont.fontFamily,
  },
  sectionsSmallText:{
    fontSize: 14,
    fontFamily: TextFont.fontFamily,
  },
  center:{
    alignItems: "center",
    justifyContent: "center",
  }
});

export const styleBalanceCard = StyleSheet.create({
  container:{
      flex: 1,
  },
  secondContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: colors.primaryColor,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 20,
  },groupTittle:{
      fontSize: 18,
  },
  center:{
      alignItems: "center",
      justifyContent: "center",
  },
  textSize:{
      fontFamily: TextFont.fontFamily,
      fontSize: 24,
  },
  textColor:{
    color: colors.FontPrimaryColor
  },
  rowContainer:{
      flexDirection: "row",
  },
  rightSide:{
      justifyContent: "flex-end",
  },
  marginTop:{
      marginTop: 10,
  },
});

export const styleAccountCard = StyleSheet.create({
  containerAll:{
    flex: 1,
    flexDirection: "row"
  },
  container:{
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
  },
  eachCard:{
      backgroundColor: colors.primaryColor,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 10,
      gap: 10,
  },
  secondContainer:{
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
  },groupTittle:{
      fontSize: 18,
  },
  center:{
      alignItems: "center",
      justifyContent: "center",
  },
  textSize:{
      fontFamily: TextFont.fontFamily,
      fontSize: 18,
  },
  textColor:{
    color: colors.FontPrimaryColor
  },
  rowContainer:{
      flexDirection: "row",
  },
  rightSide:{
      justifyContent: "flex-end",
  },
  marginTop:{
      marginTop: 10,
  },
});