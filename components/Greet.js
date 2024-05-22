import { View, Text } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: "white" }}>
      <Text>{name}</Text>
    </View>
  );
}
