import { StyleSheet } from "react-native";

export const styleGroupCard = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F7F7F7",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        marginBottom: 20,
    },groupTittle:{
        fontSize: 18,
    },
    center:{
        alignItems: "center",
        justifyContent: "center",
    },
    textSize:{
        fontSize: 16,
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