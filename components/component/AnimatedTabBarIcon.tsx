import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface AnimatedTabBarIconProps {
  name: keyof typeof Ionicons.glyphMap; // Restrict to valid Ionicons names
  size: number;
  color: string;
  focused: boolean;
}

export const AnimatedTabBarIcon: React.FC<AnimatedTabBarIconProps> = ({
  name,
  size,
  color,
  focused,
}) => {
  const scale = useSharedValue(focused ? 1.2 : 1);

  React.useEffect(() => {
    scale.value = withSpring(focused ? 1.2 : 1, {
      damping: 10,
      stiffness: 100,
    });
  }, [focused, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Ionicons name={name} size={size} color={color} />
    </Animated.View>
  );
};
