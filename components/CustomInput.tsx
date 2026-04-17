import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const CustomInput = ({
  label,
  placeholder = "Enter text",
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ marginBottom: 16 }}>
      <Text
        style={{
          fontFamily: "Quicksand-SemiBold",
          fontSize: 14,
          color: "#1C1C1E",
          marginBottom: 6,
        }}
      >
        {label}
      </Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#C0C0C0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          borderWidth: 1.5,
          borderColor: isFocused ? "#FF4500" : "#E0E0E0",
          borderRadius: 14,
          paddingHorizontal: 16,
          paddingVertical: 12,
          fontFamily: "Quicksand-Regular",
          fontSize: 15,
          color: "#1C1C1E",
          backgroundColor: "#FAFAFA",
        }}
      />
    </View>
  );
};

export default CustomInput;
