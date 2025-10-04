import { Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/slices/authSlice";
import { useRouter } from "expo-router";

export default function AuthButton() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) return null;

  return isAuthenticated ? (
    <Button onPress={() => dispatch(logoutUser())}>Logout</Button>
  ) : (
    <Button onPress={() => router.push("/auth/login")}>Login</Button>
  );
}
