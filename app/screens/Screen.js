import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Dimensions,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.leftBox} />
        <View style={styles.rightBox} />
      </View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftBox: {
    backgroundColor: "pink",
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  rightBox: {
    backgroundColor: "#2596be",
    width: 50,
    height: 50,
    marginRight: 10,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 450,
  },
});
