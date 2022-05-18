// import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import { shadowColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const handlePress = () => console.log("Clickaty clack");
  // console.log(Dimensions.get("screen"));
  // "screen" - returns size of the entire screen
  //"window" - returns the size of the visible application window (a bit smaller than screen size)

  const { landscape } = useDeviceOrientation();

  return (
    // SafeAreaView only works on iOS to make sure content is not covered by notch at the top of iPhones
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* rightmost style in array of styles has higher precedence */}
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World!
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      {/* <TouchableNativeFeedback onPress={handlePress}> */}
      {/* <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View> */}
      {/* <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        /> */}
      {/* </TouchableNativeFeedback> */}
      <Button
        title="Click"
        color="orange"
        // onPress={alert("Button tapped")}
        onPress={
          () =>
            // not working on android
            Alert.prompt("mon title", "mon message", (text) => {
              alert(text);
              console.log(text);
            })
          // Alert.alert("Johnsome title!", "Johnsome message", [
          //   { text: "Yes", onPress: () => console.log("Yes") },
          //   { text: "No", onPress: () => console.log("No") },
          // ])
        }
      />
      <View
        style={{
          width: 100,
          height: 100,
          borderWidth: 10,
          backgroundColor: "dodgerblue",
          borderColor: "royalblue",
          // to create a circle, radius should be at least half of the width of the item
          borderRadius: 50,
          // iOS
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 }, // basicall xa
          shadowOpacity: 1,
          shadowRadius: 10, //makes shadow softer
          // android
          elevation: 20,
          // padding
          paddingHorizontal: 10, // for left and right
          paddingVertical: 10, // for top and bottom
          paddingLeft: 30, // will overwrite the horizontal padding
        }}
      />
      <MaterialCommunityIcons name="email" size={200} COLOR="dodgerblue" />
      {/* <Text style={}></Text> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}
// NOTES
// There is no style inheritance in React Native so you can't apply a style in a parent elment and expect it to affect all the children

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // Density-independent Pixels (DIPs) => Physical Pixels = DIPS x Scale Factor
    width: "50%",
    height: landscape ? "100%" : "30%",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
