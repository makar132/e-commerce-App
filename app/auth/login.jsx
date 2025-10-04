import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  TextInput,
  Button,
  Text,
  ActivityIndicator,
  HelperText,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../src/store/slices/authSlice";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Login</Text>
      {error && (
        <HelperText type="error" visible={true}>
          {error}
        </HelperText>
      )}

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button mode="contained" onPress={handleLogin}>
          Sign In
        </Button>
      )}
      <Button onPress={() => router.push("/auth/register")}>
        Create Account
      </Button>
      <Button onPress={() => router.push("/auth/reset")}>
        Forgot Password?
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  input: { marginBottom: 12 },
});
