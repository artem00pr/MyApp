import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({
  title = "Click Me",
  onPress,
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      style={{
        backgroundColor: isLoading ? "#FF7A50" : "#FF4500",
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#FF4500",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        {leftIcon && leftIcon}
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" size="small" />
        ) : (
          <Text
            style={{
              fontFamily: "Quicksand-Bold",
              fontSize: 16,
              color: "#FFFFFF",
            }}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
