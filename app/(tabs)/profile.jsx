import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, ActivityIndicator, Avatar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../src/store/slices/authSlice";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, isAuthenticated, user, profile } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/auth/login");
    }
  }, [loading, isAuthenticated]);

  if (loading || !profile) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <View style={styles.container}>
      <Avatar.Text
        size={80}
        label={profile.name.charAt(0)}
        style={styles.avatar}
      />
      <Text variant="headlineMedium">{profile.name}</Text>
      <Text variant="bodyMedium">{user.email}</Text>
      <Text variant="bodySmall">Role: {profile.role}</Text>
      <Button mode="outlined" onPress={handleLogout} style={styles.button}>
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    justifyContent: "center",
  },
  avatar: { marginBottom: 16 },
  button: { marginTop: 24, width: "60%" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
