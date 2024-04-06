// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import image from "./assets/adaptive-icon.png";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
        paddingVertical: 60,
        paddingHorizontal: 25,
      }}
    >
      <ScrollView>
        <View style={{ height: 200, width: 200, backgroundColor: "black" }}>
          <Image source={image} style={{ width: 100, height: 100 }} />
        </View>
        <View style={{ height: 200, width: 200, backgroundColor: "white" }}>
          <Image
            source={require("./assets/adaptive-icon.png")}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: "https://picsum.photos/100" }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{ height: 50 }}>
          {/* guess what happens if I remove flex:1 */}
          <ImageBackground source={image} style={{ flex: 1 }}>
            <Text>Haha</Text>
          </ImageBackground>
        </View>
        {/* <ScrollView> */}
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </Text>
        {/* </ScrollView> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //  backgroundColor: "pink",
    // paddingTop: StatusBar.currentHeight,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

//in React Native, the <View> component is styled with display: flex by default.
//Use require('path/to/image.png') for local images.
//Use { uri: 'http://example.com/image.png' } for images over the network.
//However, for local images (i.e., images that are bundled with your app),
//you typically need to use the require function instead of specifying a uri.
//This is because local images need to be bundled with your app's package, and require allows the React Native packager (Metro) to correctly locate and bundle the image with your app.
