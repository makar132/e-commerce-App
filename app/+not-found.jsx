import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { router } from "expo-router";

export default function NotFoundScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text variant="headlineLarge" style={{ marginBottom: 16 }}>
        404
      </Text>
      <Text
        variant="titleMedium"
        style={{ marginBottom: 24, textAlign: "center" }}
      >
        Page not found
      </Text>
      <Button mode="contained" onPress={() => router.replace("/(tabs)")}>
        Go to Home
      </Button>
    </View>
  );
}
