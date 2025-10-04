import { View } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSelector } from "react-redux";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();

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
          <Button
            onPress={() => {
              if (!isAuthenticated) router.push("/auth/login");
              else {
                /* dispatch addToCart */
              }
            }}
            mode="contained"
          >
            Mock Add to Cart
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
