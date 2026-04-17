import { Text, View } from "react-native";

export default function Cart() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9F5F0",
      }}
    >
      <Text
        style={{ fontFamily: "Quicksand-Bold", fontSize: 22, color: "#1C1C1E" }}
      >
        🛒 Cart
      </Text>
    </View>
  );
}
