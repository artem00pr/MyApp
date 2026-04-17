import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function SignIn() {
  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-3xl font-bold mb-8">Sign In</Text>

      <Pressable
        className="bg-blue-600 px-8 py-4 rounded-xl mb-4 w-full"
        onPress={() => alert("Пока без реальной авторизации — просто демо")}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Sign In
        </Text>
      </Pressable>

      <View className="flex-row gap-2">
        <Text>Don't have an account?</Text>
        <Link href="/sign-up" className="text-blue-600 font-semibold">
          Sign Up
        </Link>
      </View>
    </View>
  );
}
