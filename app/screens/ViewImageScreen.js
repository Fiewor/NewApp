import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons />
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeIcon: {
    top: 40,
    left: 30,
    position: "absolute",
  },
  deleteIcon: {
    top: 40,
    right: 30,
    position: "absolute",
  },
  image: {
    // width: Dimensions.get("window").width,
    // height: 450,
    width: "100%",
    height: "100%",
  },
});
