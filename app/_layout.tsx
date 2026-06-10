import { AuthProvider } from "@/src/contexts/AuthProvider";
import { useAuth } from "@/src/contexts/AuthUseContext";
import store from "@/src/store/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import "../global.css";

function RootNavigator() {
  const { isAuthenticated } = useAuth()
  

  return (
    <>
      {
        isAuthenticated ?
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="payment-success" />
          </Stack> :
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" />
          </Stack>
      }
    </>
  )
}

export default function RootLayout() {
  return (
    <>
      <Provider store={store}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
      </Provider>
    </>
  );
}