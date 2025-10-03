import { View } from "react-native";
import { Text, Button, Card, FAB } from "react-native-paper";

export default function AdminProductsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={{ padding: 16 }}>
        <Text variant="headlineSmall" style={{ marginBottom: 16 }}>
          Admin Panel
        </Text>

        <Card>
          <Card.Content>
            <Text variant="titleMedium">Product Management</Text>
            <Text variant="bodyMedium" style={{ color: "#666", marginTop: 8 }}>
              CRUD operations for products will be implemented here
            </Text>
          </Card.Content>
        </Card>
      </View>

      <FAB
        icon="plus"
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        onPress={() => console.log("Mock: Add new product")}
      />
    </View>
  );
}
