import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Заполните все поля");
      return;
    }
    setIsLoading(true);
    // Пока демо
    setTimeout(() => {
      alert("Успешный вход (демо)");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <View className="px-5 pt-10">
      <CustomInput
        label="Email"
        placeholder="Введите email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <CustomInput
        label="Password"
        placeholder="Введите пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton
        title="Sign In"
        onPress={handleSignIn}
        isLoading={isLoading}
      />
      <View className="flex-row justify-center mt-8 gap-2">
        <Text>Нет аккаунта?</Text>
        <Link href="/sign-up" className="text-blue-600 font-bold">
          Зарегистрироваться
        </Link>
      </View>
    </View>
  );
}
