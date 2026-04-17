import { Redirect, Slot } from "expo-router";

const isAuthenticated = false; // ← пока false (потом заменим на реальную проверку)

export default function RootLayout() {
  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
