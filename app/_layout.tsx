import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "font-regular": require('../assets/fonts/Montserrat-Regular.ttf'),
    'font-medium': require('./../assets/fonts/Montserrat-Medium.ttf'),
    'font-semibold': require('./../assets/fonts/Montserrat-SemiBold.ttf'),
    'font-bold': require('./../assets/fonts/Montserrat-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth/signin" options={{ headerShown: false }} />
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }} />
        <Stack.Screen
          name="singlejoin"
          options={{
            headerShown: false,
          }} />
        <Stack.Screen
          name="singlejoinservices"
          options={{
            headerShown: false,
          }} />
      </Stack>
    </ThemeProvider>
  );
}
