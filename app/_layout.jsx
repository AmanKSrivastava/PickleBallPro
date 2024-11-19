import { SplashScreen, Stack } from "expo-router";
import "../styles/global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontLoaded, error] = useFonts({
    Inter: require("../assets/fonts/Inter-Italic-VariableFont.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontLoaded) SplashScreen.hideAsync();
  }, [fontLoaded, error]);

  if (!fontLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
