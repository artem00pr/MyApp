import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      alert("Заполните все поля");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      alert("Регистрация успешна (демо)");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <View className="px-5 pt-10">
      <CustomInput
        label="Full Name"
        placeholder="Введите имя"
        value={name}
        onChangeText={setName}
      />
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
        title="Sign Up"
        onPress={handleSignUp}
        isLoading={isLoading}
      />
      <View className="flex-row justify-center mt-8 gap-2">
        <Text>Уже есть аккаунт?</Text>
        <Link href="/sign-in" className="text-blue-600 font-bold">
          Войти
        </Link>
      </View>
    </View>
  );
}
