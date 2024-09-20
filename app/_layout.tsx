import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    RalewayBlack: require("../assets/fonts/Raleway-Black.ttf"),
    RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
    RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"),
    RalewaySemiBold: require("../assets/fonts/Raleway-SemiBold.ttf"),
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
    <ThemeProvider value={DefaultTheme}>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="signup"
          options={{
            headerShadowVisible: false,
            headerTransparent: true,
            headerTitle: "",
            headerTintColor: "#FEC847",
            contentStyle: {
              backgroundColor: "#195ADC",
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
