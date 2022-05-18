import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  //   ...Platform.select({
  //     ios: {
  //       fontZise: 20,
  //       fontFamily: "Avenir",
  //     },
  //     android: {
  //       fontSize: 18,
  //       fontFamily: "Roboto",
  //     },
  //   }),
});
