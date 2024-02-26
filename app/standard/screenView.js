import { Dimensions, PixelRatio, StyleSheet } from "react-native";
let screen = Dimensions.get("window");
let widthScreen = screen.width;
let heightScreen = screen.height;

export const colors = {
    primaryColor: "#2F59EE",
    FontSecundaryColor: "white"
}

const screenStandar = {
    clearColors:{
        primary: "white",
    },
    separation: {
        headSeparation: heightScreen * 0.04,
        horizontalSeparation: widthScreen * 0.055,
        userHorizontalSeparation: widthScreen * 0.035,
    },
    heightBar: {
        heightSize: heightScreen * 0.06,
    },
    screenSize: {
        width: widthScreen,
        height: heightScreen - heightScreen * 0.033,
    },
    ViewSize: {
        width: widthScreen - widthScreen * 0.055 * 2,
        maxWidth: Dimensions.get("window").width,
        maxHeight: Dimensions.get("window").height,
    },
    scale: PixelRatio.get(),
};

export const styleScreen = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: screenStandar.clearColors.primary,
        paddingTop: screenStandar.separation.headSeparation,
    },
    screen: {
        flex: 1,
        marginTop: 30,
        justifyContent: "space-between",
        paddingHorizontal: screenStandar.separation.horizontalSeparation,
    },
    spacePrincipleWord:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    mainText:{
        fontSize: 30,
    },
    spaceToShowArray:{
        flexDirection: "column",
        flex: 6,
        alignItems: "stretch",
        justifyContent: "center",
    },
    spaceToSFooter:{
        flex: 1,
    },
  });

export const styleHeadBar = StyleSheet.create({
    headBar: {
        /*Disposicón*/
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        /*Tamaños y espacios*/
        height: screenStandar.heightBar.heightSize,
        paddingHorizontal: screenStandar.separation.horizontalSeparation,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
    },
    screenInfo:{
        flex: 1,
    },
    userInfo: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    TittleScreen:{
        fontSize: 20,
    },
    userName:{
        fontSize: 19,
    }
  });