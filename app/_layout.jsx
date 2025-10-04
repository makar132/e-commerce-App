import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/store/store";
import { PaperProvider } from "react-native-paper";
import { Stack } from "expo-router";
import useAuthListener from "../src/hooks/useAuthListener";

function AuthSubscriber() {
  useAuthListener();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ title: "Login" }} />
      <Stack.Screen name="auth/register" options={{ title: "Register" }} />
      <Stack.Screen name="auth/reset" options={{ title: "Reset Password" }} />
      <Stack.Screen
        name="product/[id]"
        options={{ title: "Product Details" }}
      />
      <Stack.Screen name="admin/products" options={{ title: "Admin Panel" }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <AuthSubscriber />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
