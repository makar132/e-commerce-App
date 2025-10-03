import { View } from "react-native";
import { Text, Button } from "react-native-paper";

export default function WishlistScreen() {
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
        Wishlist
      </Text>

      <Text
        variant="bodyMedium"
        style={{ textAlign: "center", color: "#666", marginBottom: 24 }}
      >
        Wishlist functionality will be implemented here
      </Text>

      <Button mode="outlined">// TODO: Implement wishlist features</Button>
    </View>
  );
}
