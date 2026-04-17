import { useState } from "react";
import { Image, Pressable, Text } from "react-native";
import { icons } from "../constants";

export default function CartButton() {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: pressed ? "#E03E00" : "#FF4500",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        gap: 6,
        shadowColor: "#FF4500",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
      }}
    >
      <Image
        source={icons.bag}
        style={{ width: 18, height: 18, tintColor: "white" }}
        resizeMode="contain"
      />
      <Text
        style={{
          color: "white",
          fontSize: 14,
          fontFamily: "Quicksand-Bold",
        }}
      >
        Cart
      </Text>
    </Pressable>
  );
}
