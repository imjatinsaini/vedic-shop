// // app/(tabs)/_layout.tsx
// import { Tabs } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import React from 'react';

// export default function TabsLayout() {
//   return (
//     <Tabs
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: '#6200ee',
//         tabBarInactiveTintColor: 'gray',
//         tabBarIcon: ({ color, size }) => {
//           let iconName: string = '';

//           switch (route.name) {
//             case 'home':
//               iconName = 'home';
//               break;
//             case 'categories':
//               iconName = 'list';
//               break;
//             case 'orders':
//               iconName = 'cart';
//               break;
//             case 'profile':
//               iconName = 'person';
//               break;
//             default:
//               iconName = 'ellipse';
//           }

//           return <Ionicons name={iconName as any} size={size} color={color} />;
//         },
//       })}
//     >
//       <Tabs.Screen name="home" options={{ title: 'Home' }} />
//       <Tabs.Screen name="categories" options={{ title: 'Categories' }} />
//       <Tabs.Screen name="orders" options={{ title: 'Orders' }} />
//       <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
//     </Tabs>
//   );
// }


// import { Tabs } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import React from 'react';// Custom animated icon component
// import { AnimatedTabBarIcon } from '@/components/component/AnimatedTabBarIcon';

// export default function TabsLayout() {
//   return (
//     <Tabs
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: '#6200ee',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {
//           backgroundColor: 'white',
//           borderTopWidth: 0,
//           elevation: 5, // Adds shadow to the tab bar for a more professional look
//         },
//         tabBarIcon: ({ color, size, focused }) => {
//           let iconName: string = '';

//           switch (route.name) {
//             case 'index': // Home
//               iconName = 'home-outline';
//               break;
//             case 'categories':
//               iconName = 'grid-outline';
//               break;
//             case 'orders':
//               iconName = 'receipt-outline';
//               break;
//             case 'cart':
//               iconName = 'cart-outline';
//               break;
//             case 'account':
//               iconName = 'person-outline';
//               break;
//             default:
//               iconName = 'ellipse';
//           }

//           // Use custom animated icon
//           return (
//             <AnimatedTabBarIcon
//               name={iconName}
//               size={size}
//               color={color}
//               focused={focused}
//             />
//           );
//         },
//       })}
//     >
//       <Tabs.Screen name="index" options={{ title: 'Home' }} />
//       <Tabs.Screen name="orders" options={{ title: 'Orders' }} />
//       <Tabs.Screen name="categories" options={{ title: 'Categories' }} />
//       <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
//       <Tabs.Screen name="account" options={{ title: 'Account' }} />
//     </Tabs>
//   );
// }


// import { Tabs } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import React from 'react';
// import { AnimatedTabBarIcon } from '@/components/component/AnimatedTabBarIcon';

// export default function TabsLayout() {
//   return (
//     <Tabs
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: '#6200ee',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {
//           backgroundColor: 'white',
//           borderTopWidth: 0,
//           elevation: 5, // Shadow effect
//         },
//         tabBarIcon: ({ color, size, focused }) => {
//           let iconName: keyof typeof Ionicons.glyphMap = 'ellipse'; // Default icon

//           switch (route.name) {
//             case 'index':
//               iconName = 'home-outline';
//               break;
//             case 'orders':
//               iconName = 'receipt-outline';
//               break;
//             case 'categories':
//               iconName = 'grid-outline';
//               break;
//             case 'cart':
//               iconName = 'cart-outline';
//               break;
//             case 'account':
//               iconName = 'person-outline';
//               break;
//           }

//           return (
//             <AnimatedTabBarIcon
//               name={iconName}
//               size={size}
//               color={color}
//               focused={focused}
//             />
//           );
//         },
//       })}
//     >
//       <Tabs.Screen name="index" options={{ title: 'Home' }} />
//       <Tabs.Screen name="orders" options={{ title: 'Orders' }} />
//       <Tabs.Screen name="categories" options={{ title: 'Categories' }} />
//       <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
//       <Tabs.Screen name="account" options={{ title: 'Account' }} />
      
//     </Tabs>
//   );
// }
  



import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedTabBarIcon } from '@/components/component/AnimatedTabBarIcon';// adjust the path as needed
import { useCart } from '../contexts/CartContext';

export default function TabsLayout() {
  // Get the cart items from your context
  const { cartItems } = useCart();
  // You can calculate the count here. For example, if you want the total quantity:
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  // Or if you simply want the number of distinct products, use: cartItems.length

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 5, // Shadow effect
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'ellipse';

          switch (route.name) {
            case 'index':
              iconName = 'home-outline';
              break;
            case 'orders':
              iconName = 'receipt-outline';
              break;
            case 'categories':
              iconName = 'grid-outline';
              break;
            case 'cart':
              iconName = 'cart-outline';
              break;
            case 'account':
              iconName = 'person-outline';
              break;
          }

          // Create your animated icon component
          const IconComponent = (
            <AnimatedTabBarIcon
              name={iconName}
              size={size}
              color={color}
              focused={focused}
            />
          );

          // If the current route is the cart, wrap the icon with a badge view
          if (route.name === 'cart') {
            return (
              <View className="relative">
                {IconComponent}
                {cartCount > 0 && (
                  <View className="absolute -top-1 -right-1 bg-red-500 rounded-full h-4 w-4 items-center justify-center">
                    <Text className="text-xs text-white">
                      {cartCount}
                    </Text>
                  </View>
                )}
              </View>
            );
          }

          // For other tabs, return the icon as is
          return IconComponent;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="orders" options={{ title: 'Orders' }} />
      <Tabs.Screen name="categories" options={{ title: 'Categories' }} />
      <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
      <Tabs.Screen name="account" options={{ title: 'Account' }} />
    </Tabs>
  );
}