import { StyleSheet } from "react-native";

export const styleCategoryCard = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F7F7F7",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 12,
    },TextCategorySection:{
        fontSize: 18,
    },
    textPeriodData:{
        fontSize: 15,
    },
    categoryData:{
        flex: 1,
        marginVertical: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    categoryDataRows:{
        flex: 1,
        marginVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    categoryName:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    categoryPeriod:{
        flex: 0.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    textSize:{
        fontSize: 15,
    },
    rowContainer:{
        flexDirection: "row",
    },
  });