import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
    return (
        <PaperProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="auth/login" options={{ title: 'Login' }} />
                <Stack.Screen name="auth/register" options={{ title: 'Register' }} />
                <Stack.Screen name="product/[id]" options={{ title: 'Product Details' }} />
                <Stack.Screen name="admin/products" options={{ title: 'Admin Panel' }} />
                <Stack.Screen name="+not-found" />
            </Stack>
        </PaperProvider>
    );
}
