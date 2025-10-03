import { View } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { useLocalSearchParams, router } from "expo-router";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f5f5f5" }}>
      <Card style={{ marginBottom: 16 }}>
        <Card.Content>
          <Text variant="headlineMedium" style={{ marginBottom: 8 }}>
            Product Details
          </Text>
          <Text variant="bodyLarge" style={{ marginBottom: 16, color: "#666" }}>
            Product ID: {id}
          </Text>
          <Text variant="bodyMedium">
            Product details, images, descriptions, and purchase options will be
            implemented here
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="outlined" onPress={() => router.back()}>
            Go Back
          </Button>
          <Button mode="contained">Mock Add to Cart</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
