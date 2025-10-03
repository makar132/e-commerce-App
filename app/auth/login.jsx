import { View } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { router } from "expo-router";

export default function LoginScreen() {
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
            Login Screen
          </Text>

          <Text
            variant="bodyMedium"
            style={{ textAlign: "center", marginBottom: 24, color: "#666" }}
          >
            Login form with validation will be implemented here
          </Text>

          <Button
            mode="contained"
            onPress={() => router.replace("/(tabs)")}
            style={{ marginBottom: 16 }}
          >
            Mock Login (Navigate to Tabs)
          </Button>

          <Button mode="text" onPress={() => router.push("/auth/register")}>
            Go to Register
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}
