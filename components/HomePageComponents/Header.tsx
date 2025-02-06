// import React from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// type HeaderProps = {
//   onMenuPress: () => void;
// };

// const Header: React.FC<HeaderProps> = ({ onMenuPress }) => {
//   return (
//     <View className="flex-row items-center justify-between mt-16 px-4 rounded-2xl py-4 bg-white">
//       {/* Left: Logo + Title */}
//       <View className="flex-row items-center">
//         <Image
//           source={{
//             uri: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//           }}
//           className="w-8 h-8 rounded-full mr-2"
//         />
//         <Text className="text-xl font-bold text-gray-800">VEDIC SHOP</Text>
//       </View>
//       {/* Right: Menu Icon */}
//       <TouchableOpacity onPress={onMenuPress}>
//         <Ionicons name="cart-outline" size={24} color="#333" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Header;



import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // adjust path as needed
import { useRouter } from 'expo-router'; // if you are using expo-router
import { useCart } from '@/app/contexts/CartContext';

type HeaderProps = {
  // You can either pass a prop to handle the press,
  // or, if you use navigation, you can use the router directly.
  // For this example, we’ll use a prop called onCartPress.
  onCartPress?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onCartPress }) => {
  const { cartItems } = useCart();
  const router = useRouter();

  // Calculate total quantity of products in the cart.
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // If no onCartPress function is provided, use navigation as a fallback.
  const handleCartPress = () => {
    if (onCartPress) {
      onCartPress();
    } else {
      router.push('/cart'); // navigate to your Cart screen
    }
  };

  return (
    <View className="flex-row items-center justify-between mt-16 px-4 rounded-2xl py-4 bg-white">
      {/* Left: Logo + Title */}
      <View className="flex-row items-center">
        <Image
          source={{
            uri: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
          }}
          className="w-8 h-8 rounded-full mr-2"
        />
        <Text className="text-xl font-bold text-gray-800">VEDIC SHOP</Text>
      </View>
      {/* Right: Cart Icon with badge */}
      <TouchableOpacity onPress={handleCartPress} className="relative">
        <Ionicons name="cart-outline" size={24} color="#333" />
        {cartCount > 0 && (
          <View className="absolute -top-1 -right-1 bg-red-500 rounded-full h-4 w-4 items-center justify-center">
            <Text className="text-xs text-white">{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;