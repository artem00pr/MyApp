import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function SignUp() {
  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-3xl font-bold mb-8">Sign Up</Text>

      <Pressable
        className="bg-green-600 px-8 py-4 rounded-xl mb-4 w-full"
        onPress={() => alert("Пока демо регистрации")}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Sign Up
        </Text>
      </Pressable>

      <View className="flex-row gap-2">
        <Text>Already have an account?</Text>
        <Link href="/sign-in" className="text-blue-600 font-semibold">
          Sign In
        </Link>
      </View>
    </View>
  );
}
