import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../src/store/slices/authSlice";

export default function ResetPasswordScreen() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleReset = async () => {
    await dispatch(resetPassword(email));
    setSent(true);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Reset Password</Text>
      {error && (
        <HelperText type="error" visible={true}>
          {error}
        </HelperText>
      )}
      {sent ? (
        <Text>A password reset email has been sent.</Text>
      ) : (
        <>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button mode="contained" onPress={handleReset}>
              Send Reset Link
            </Button>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  input: { marginBottom: 12 },
});
