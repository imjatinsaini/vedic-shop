// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Image, Animated, Alert } from 'react-native';
// import type { FC } from 'react';
// import { StyleSheet } from 'react-native';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
//   seller: string;
// }

// const CartScreen: FC = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     {
//       id: '1',
//       name: "Men's Red Mesh Sports Shoes",
//       price: 342.02,
//       image: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1733812704716.webp',
//       quantity: 1,
//       seller: 'STS ENTERPRISES',
//     },
//     {
//       id: '2',
//       name: "Women's Georgette Floral Printed Saree",
//       price: 392.98,
//       image: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1733812704716.webp',
//       quantity: 1,
//       seller: 'SIRIL',
//     },
//   ]);

//   const deliveryCharge = 100;
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const total = subtotal < 500 ? subtotal + deliveryCharge : subtotal;

//   const animationValue = new Animated.Value(0);

//   const increaseQuantity = (id: string) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//     triggerAnimation();
//   };

//   const decreaseQuantity = (id: string) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//     triggerAnimation();
//   };

//   const deleteItem = (id: string) => {
//     Alert.alert(
//       'Remove Item',
//       'Are you sure you want to remove this item?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Remove',
//           onPress: () => {
//             setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//           },
//         },
//       ]
//     );
//   };

//   const triggerAnimation = () => {
//     Animated.timing(animationValue, {
//       toValue: 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       animationValue.setValue(0);
//     });
//   };

//   const animatedStyle = {
//     transform: [
//       {
//         scale: animationValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: [1, 1.1],
//         }),
//       },
//     ],
//   };

//   const renderItem = ({ item }: { item: CartItem }) => (
//     <Animated.View className="flex-row items-center justify-between p-4 bg-white rounded-lg mb-4 " style={animatedStyle}>
//       <Image
//         source={{ uri: item.image }}
//         className="w-20 h-20 rounded-lg"
//         resizeMode="cover"
//       />
//       <View className="flex-1 ml-4">
//         <Text className="text-lg font-bold">{item.name}</Text>
//         <Text className="text-sm text-gray-500">Sold by: {item.seller}</Text>
//         <Text className="text-base font-semibold mt-2">₹{item.price.toFixed(2)}</Text>
//       </View>
//       <View className="flex-row gap-2 items-center space-x-2">
//         <TouchableOpacity
//           onPress={() => decreaseQuantity(item.id)}
//           className="p-1 px-2 border rounded-full"
//         >
//           <Text className="text-black font-bold">-</Text>
//         </TouchableOpacity>
//         <Text className="text-lg font-bold">{item.quantity}</Text>
//         <TouchableOpacity
//           onPress={() => increaseQuantity(item.id)}
//           className="p-1 px-2  border rounded-full"
//         >
//           <Text className="text-black font-bold">+</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity
//         onPress={() => deleteItem(item.id)}
//         className="p-1 px-2 ml-4 bg-red-500 rounded-full"
//       >
//         <Text className="text-white font-bold">X</Text>
//       </TouchableOpacity>
//     </Animated.View>
//   );

//   return (
//     <View className="flex-1 p-4 bg-gray-100 mt-14 ">
//       <Text className="text-2xl font-bold mb-4">Your Cart</Text>
//       <FlatList
//         data={cartItems}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//       />
//       <View className="p-4 bg-white rounded-lg  mt-4">
//         <Text className="text-base font-semibold">Subtotal: ₹{subtotal.toFixed(2)}</Text>
//         {subtotal < 500 && (
//           <Text className="text-base font-semibold text-red-500">
//             Delivery Charge: ₹{deliveryCharge.toFixed(2)}
//           </Text>
//         )}
//         <Text className="text-lg font-bold mt-2">Total: ₹{total.toFixed(2)}</Text>
//       </View>
//       <TouchableOpacity
//         onPress={() => alert('Proceeding to buy!')}
//         className="mt-6 p-4 bg-yellow-500 rounded-lg "
//       >
//         <Text className="text-center text-white font-bold text-lg">Proceed to Checkout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CartScreen;


// app/cart.tsx

// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, Image, Alert, Animated } from 'react-native';
// import { useRouter } from 'expo-router';
// import { useCart } from '../contexts/CartContext';

// const CartScreen: React.FC = () => {
//   const { cartItems, updateQuantity, removeItem } = useCart();
//   const router = useRouter();

//   const deliveryCharge = 100;
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const total = subtotal < 500 ? subtotal + deliveryCharge : subtotal;

//   const animationValue = new Animated.Value(0);

//   const triggerAnimation = () => {
//     Animated.timing(animationValue, {
//       toValue: 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       animationValue.setValue(0);
//     });
//   };

//   const animatedStyle = {
//     transform: [
//       {
//         scale: animationValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: [1, 1.1],
//         }),
//       },
//     ],
//   };

//   const renderItem = ({ item }: { item: any }) => (
//     <Animated.View className="flex-row items-center justify-between p-4 bg-white rounded-lg mb-4" style={animatedStyle}>
//       <Image source={{ uri: item.image }} className="w-20 h-20 rounded-lg" resizeMode="cover" />
//       <View className="flex-1 ml-4">
//         <Text className="text-lg font-bold">{item.name}</Text>
//         <Text className="text-base font-semibold mt-2">₹{item.price.toFixed(2)}</Text>
//       </View>
//       <View className="flex-row items-center">
//         <TouchableOpacity onPress={() => { updateQuantity(item.id, Math.max(1, item.quantity - 1)); triggerAnimation(); }} className="p-1 px-2 border rounded-full">
//           <Text className="text-black font-bold">-</Text>
//         </TouchableOpacity>
//         <Text className="text-lg font-bold mx-2">{item.quantity}</Text>
//         <TouchableOpacity onPress={() => { updateQuantity(item.id, item.quantity + 1); triggerAnimation(); }} className="p-1 px-2 border rounded-full">
//           <Text className="text-black font-bold">+</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity onPress={() => removeItem(item.id)} className="p-1 px-2 ml-4 bg-red-500 rounded-full">
//         <Text className="text-white font-bold">X</Text>
//       </TouchableOpacity>
//     </Animated.View>
//   );

//   return (
//     <View className="flex-1 p-4 bg-gray-100 mt-14">
//       <Text className="text-2xl font-bold mb-4">Your Cart</Text>
//       <FlatList data={cartItems} keyExtractor={(item) => item.id} renderItem={renderItem} showsVerticalScrollIndicator={false} />
//       <View className="p-4 bg-white rounded-lg mt-4">
//         <Text className="text-base font-semibold">Subtotal: ₹{subtotal.toFixed(2)}</Text>
//         {subtotal < 500 && (
//           <Text className="text-base font-semibold text-red-500">Delivery Charge: ₹{deliveryCharge.toFixed(2)}</Text>
//         )}
//         <Text className="text-lg font-bold mt-2">Total: ₹{total.toFixed(2)}</Text>
//       </View>
//       <TouchableOpacity onPress={() => router.push('/checkout')} className="mt-6 p-4 bg-yellow-500 rounded-lg">
//         <Text className="text-center text-white font-bold text-lg">Proceed to Checkout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CartScreen;



// CartScreen.tsx (your provided code)
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from '../contexts/CartContext';

const CartScreen: React.FC = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const router = useRouter();

  const deliveryCharge = 100;
  const subtotal = cartItems.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0);
  const total = subtotal < 500 ? subtotal + deliveryCharge : subtotal;

  const animationValue = new Animated.Value(0);

  const triggerAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      animationValue.setValue(0);
    });
  };



  const renderItem = ({ item }: { item: any }) => (
    <Animated.View
      className="flex-row items-center justify-between p-4 bg-white rounded-lg mb-4"
 
    >
      <Image source={{ uri: item.productImages[0] }} className="w-20 h-20 rounded-lg" resizeMode="cover" />
      <View className="flex-1 ml-4">
        <Text className="text-lg font-bold">{item.productName}</Text>
        <Text className="text-base font-semibold mt-2">₹{item.discountedPrice.toFixed(2)}</Text>
      </View>
      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={() => {
            updateQuantity(item._id, Math.max(1, item.quantity - 1));
            triggerAnimation();
          }}
          className="p-1 px-2 border rounded-full"
        >
          <Text className="text-black font-bold">-</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold mx-2">{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => {
            updateQuantity(item._id, item.quantity + 1);
            triggerAnimation();
          }}
          className="p-1 px-2 border rounded-full"
        >
          <Text className="text-black font-bold">+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => removeItem(item._id)} className="p-1 px-2 ml-4 bg-red-500 rounded-full">
        <Text className="text-white font-bold">X</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View className="flex-1 p-4 bg-gray-100 mt-14">
      <Text className="text-2xl font-bold mb-4">Your Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <View className="p-4 bg-white rounded-lg mt-4">
        <Text className="text-base font-semibold">Subtotal: ₹{subtotal.toFixed(2)}</Text>
        {subtotal < 500 && (
          <Text className="text-base font-semibold text-red-500">Delivery Charge: ₹{deliveryCharge.toFixed(2)}</Text>
        )}
        <Text className="text-lg font-bold mt-2">Total: ₹{total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => router.push('/checkout')} className="mt-6 p-4 bg-yellow-500 rounded-lg">
        <Text className="text-center text-white font-bold text-lg">Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
