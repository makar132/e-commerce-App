import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../src/store/slices/authSlice";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated]);

  const handleRegister = () => {
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Register</Text>
      {error && (
        <HelperText type="error" visible={true}>
          {error}
        </HelperText>
      )}
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
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
        <Button mode="contained" onPress={handleRegister}>
          Sign Up
        </Button>
      )}
      <Button onPress={() => router.push("/auth/login")}>
        Already have an account?
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  input: { marginBottom: 12 },
});
