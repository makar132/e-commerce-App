import { View } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { router } from "expo-router";

export default function ProductsScreen() {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f5f5f5" }}>
      <Text variant="headlineSmall" style={{ marginBottom: 16 }}>
        Products Screen
      </Text>

      <Card style={{ marginBottom: 16 }}>
        <Card.Content>
          <Text variant="titleMedium">Navigation Test</Text>
          <Text variant="bodyMedium">Test navigation between screens</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push("/product/123")}>
            View Product Details
          </Button>
          <Button onPress={() => router.push("/auth/login")}>
            Go to Login
          </Button>
        </Card.Actions>
      </Card>

      <Text variant="bodyMedium" style={{ color: "#666" }}>
        // TODO: Implement product list, search, filtering
      </Text>
    </View>
  );
}
