import { View, Text, StyleSheet } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={[styles.container, styles.boxShadow]}>
      <Text style={styles.text}>{name}</Text>
      <Text style={[styles.box, styles.bgBlue, styles.boxShadow]}>
        Pass an array of styles
      </Text>
      <Text style={[styles.box, styles.bgGreen]}>Pass an array of styles</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: "white",
    flexDirection: "row",
  },
  text: { color: "black", fontSize: 18, lineHeight: 36 },
  box: {
    width: 100, // 100dp width, the default unit for width and height is
    height: 100, // density-independent pixels, commonly abbreviated as dp or dip.
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
  boxShadow: {
    shadowColor: "#333333", //Sets the drop shadow color.
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 4, //Sets the drop shadow blur radius.
  },
  bgBlue: { backgroundColor: "lightblue" },
  bgGreen: { backgroundColor: "lightgreen" },
});
