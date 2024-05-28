import { View, Text, StyleSheet } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={[styles.box, styles.bgBlue]}>Pass an array of styles</Text>
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
  box: { width: 100, height: 100, margin: 10 },
  bgBlue: { backgroundColor: "lightblue" },
  bgGreen: { backgroundColor: "lightgreen" },
});
