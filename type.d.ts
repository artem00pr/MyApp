interface CustomInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

interface CustomButtonProps {
  title?: string;
  onPress: () => void;
  style?: string;
  textStyle?: string;
  leftIcon?: React.ReactNode;
  isLoading?: boolean;
}
