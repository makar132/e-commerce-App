import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { router } from "expo-router";

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text variant="headlineSmall" style={{ marginBottom: 16 }}>
        Profile Screen
      </Text>

      <Text
        variant="bodyMedium"
        style={{ textAlign: "center", color: "#666", marginBottom: 24 }}
      >
        User profile and authentication will be implemented here
      </Text>

      <Button
        mode="contained"
        onPress={() => router.push("/auth/login")}
        style={{ marginBottom: 8 }}
      >
        Go to Login
      </Button>

      <Button mode="outlined" onPress={() => router.push("/admin/products")}>
        Admin Panel (Test)
      </Button>
    </View>
  );
}
