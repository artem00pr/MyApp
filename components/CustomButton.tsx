import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
}

export default function CustomButton({
  title,
  onPress,
  isLoading = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      className="bg-blue-600 py-4 rounded-2xl mt-4"
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className="text-white text-center font-semibold text-lg">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
