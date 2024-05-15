// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";
import image from "./assets/adaptive-icon.png";
export default function App() {
  const func = (arr, n) => {
    const newArr = Array.from(Array(n), (_, index) => index + 1);
    const sum = newArr.reduce((total, current, index) => total + current, 0);
    const sum2 = arr.reduce((total, current) => total + current, 0);
    return sum - sum2;
  };
  const funcSort = (arr, n) => {
    const set = new Set(Array.from(new Array(n), (_, index) => index + 1));
    for (let i of arr) {
      if (set.has(i)) set.delete(i);
    }
    return Array.from(set.values())[0];
  };

  const [visible, setVisible] = useState(false);

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
          <Pressable
            onPress={() => {
              console.log("First Image pressed");
            }}
          >
            <Image source={image} style={{ width: 100, height: 100 }} />
            <Text>
              test
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident */}
            </Text>
          </Pressable>
        </View>
        <Button
          title="Press"
          color="red"
          onPress={() => {
            console.log("Hello");
          }}
        />
        <Pressable
          onPress={() => {
            setVisible(true);
            console.log("Custom Button");
          }}
        >
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 10,
              backgroundColor: "white",
              alignItems: "center",
            }}
          >
            <Text>Custom Button</Text>
          </View>
        </Pressable>
        <Modal
          visible={visible}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => {
            setVisible(false);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "lightblue",
              padding: 60,
              alignItems: "center",
            }}
          >
            <Text>Modal Content</Text>
            <Button
              title="Close"
              color="black"
              onPress={() => {
                setVisible(false);
              }}
            />
          </View>
        </Modal>
        <View style={{ height: 200, width: 200, backgroundColor: "blue" }}>
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
            <Text>Haha {funcSort([1, 2, 4, 5], 5)}</Text>
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
