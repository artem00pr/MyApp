import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

interface CustomInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
}

export default function CustomInput({
  label,
  placeholder = "Введите текст",
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="mb-6">
      {label && <Text className="text-base font-semibold mb-2">{label}</Text>}
      <TextInput
        className={`border rounded-2xl px-5 py-4 text-base ${
          isFocused ? "border-blue-600" : "border-gray-300"
        }`}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
