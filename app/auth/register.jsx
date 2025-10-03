import { View } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { router } from "expo-router";

export default function RegisterScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card>
        <Card.Content>
          <Text
            variant="headlineSmall"
            style={{ textAlign: "center", marginBottom: 24 }}
          >
            Register Screen
          </Text>

          <Text
            variant="bodyMedium"
            style={{ textAlign: "center", marginBottom: 24, color: "#666" }}
          >
            Registration form with validation will be implemented here
          </Text>

          <Button
            mode="contained"
            onPress={() => router.replace("/(tabs)")}
            style={{ marginBottom: 16 }}
          >
            Mock Register (Navigate to Tabs)
          </Button>

          <Button mode="text" onPress={() => router.push("/auth/login")}>
            Go to Login
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}
