// app/index.tsx
import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
export default function WelcomeScreen() {
  const router = useRouter();

  useEffect(() => {
    // Automatically navigate to tabs after a delay, e.g., 2 seconds
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-black">
      <Text className="text-2xl font-bold">Welcome to Vedic.Shop!</Text>

    </View>
  );
}