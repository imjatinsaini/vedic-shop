// // app/checkout.tsx
// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
// import { Stack, useRouter } from 'expo-router';
// import { useCart } from './contexts/CartContext';
// import { Ionicons } from '@expo/vector-icons';

// const CheckoutScreen: React.FC = () => {
//   const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
//   const router = useRouter();

//   const deliveryCharge = 100;
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const total = subtotal < 500 ? subtotal + deliveryCharge : subtotal;

//   const handleProceedToPayment = () => {
//     // Implement your payment logic here.
//     Alert.alert('Payment', 'Proceeding to payment...');
//   };

//   return (
//     <>
//     <Stack.Screen
//         options={{
//           headerLeft: () => (
//             <TouchableOpacity
//               onPress={() => router.push('/cart')} // navigate to home (index) screen
//               style={{ marginLeft: 16 }} // optional styling
//               className='flex-row items-center pe-5 '
//             >
//                 <Ionicons name="arrow-back" size={24} color="#007aff" />
//               <Text style={{ fontSize: 16, color: '#007aff' }}>{'Cart'}</Text>
//             </TouchableOpacity>
//           ),
//           // Optionally hide the default back title if it appears
         
//         }}
//       />
//     <View className="flex-1 bg-white mb-4 p-4">
   
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {cartItems.length === 0 ? (
//           <Text className="text-center text-gray-500">Your cart is empty.</Text>
//         ) : (
//           cartItems.map((item) => (
//             <View
//               key={item.id}
//               className="flex-row items-center justify-between p-4 bg-white rounded-lg mb-4"
//             >
//               <Image
//                 source={{ uri: item.image }}
//                 className="w-20 h-20 rounded-lg"
//                 resizeMode="cover"
//               />
//               <View className="flex-1 ml-4">
//                 <Text className="text-lg font-bold">{item.name}</Text>
//                 {/* Add any additional details as needed */}
//                 <Text className="text-base font-semibold mt-2">₹{item.price.toFixed(2)}</Text>
//               </View>
//               <View className="flex-row items-center">
//                 <TouchableOpacity
//                   onPress={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                   className="p-1 px-2 border rounded-full"
//                 >
//                   <Text className="text-black font-bold">-</Text>
//                 </TouchableOpacity>
//                 <Text className="text-lg font-bold mx-2">{item.quantity}</Text>
//                 <TouchableOpacity
//                   onPress={() => updateQuantity(item.id, item.quantity + 1)}
//                   className="p-1 px-2 border rounded-full"
//                 >
//                   <Text className="text-black font-bold">+</Text>
//                 </TouchableOpacity>
//               </View>
//               <TouchableOpacity
//                 onPress={() => removeItem(item.id)}
//                 className="p-1 px-2 ml-4 bg-red-500 rounded-full"
//               >
//                 <Text className="text-white font-bold">X</Text>
//               </TouchableOpacity>
//             </View>
//           ))
//         )}
//       </ScrollView>
//       <View className="p-4 bg-white rounded-lg mt-4">
//         <Text className="text-base font-semibold">
//           Subtotal: ₹{subtotal.toFixed(2)}
//         </Text>
//         {subtotal < 500 && (
//           <Text className="text-base font-semibold text-red-500">
//             Delivery Charge: ₹{deliveryCharge.toFixed(2)}
//           </Text>
//         )}
//         <Text className="text-lg font-bold mt-2">Total: ₹{total.toFixed(2)}</Text>
//       </View>
//       <TouchableOpacity
//         onPress={handleProceedToPayment}
//         className="mt-6 p-4 bg-yellow-500 rounded-lg"
//       >
//         <Text className="text-center text-white font-bold text-lg">
//           Proceed to Payment
//         </Text>
//       </TouchableOpacity>
//     </View>
//     </>
//   );
// };

// export default CheckoutScreen;


// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
// import { Stack, useRouter } from 'expo-router';
// import { useCart } from './contexts/CartContext';
// import { Ionicons } from '@expo/vector-icons';
// import EcomAddAddress, { ShippingAddress } from '@/components/EcomComponents/EcomAddAddress';

// const CheckoutScreen: React.FC = () => {
//   const { cartItems } = useCart();
//   const router = useRouter();

//   // Calculate the subtotal from the cart items.
//   const deliveryCharge = 100;
//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.discountedPrice * item.quantity,
//     0
//   );
//   const total = subtotal < 500 ? subtotal + deliveryCharge : subtotal;

//   // Handler for proceeding to payment (you can add your payment logic here).
//   const handleProceedToPayment = () => {
//     Alert.alert('Payment', 'Proceeding to payment...');
//     // For example: router.push('/payment') or any further action.
//   };

 
//     const [selectedAddress, setSelectedAddress] = useState<ShippingAddress | null>(null);
  

//   return (
//     <>
//     <Stack.Screen
//   options={{
//     title: 'Checkout', // Set the title here
//     headerLeft: () => (
//       <TouchableOpacity
//         onPress={() => router.push('/cart')} // navigate to home (index) screen
//         style={{ marginLeft: 0 }} // optional styling
//         className='flex-row items-center pe-5 '
//       >
//         <Ionicons name="arrow-back" size={24} color="#007aff" />
//         <Text style={{ fontSize: 16, color: '#007aff' }}>{'Cart'}</Text>
//       </TouchableOpacity>
//     ),
//   }}
// />
//     <View className="flex-1 bg-white mb-5 p-4">

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {cartItems.length === 0 ? (
//           <Text className="text-center text-gray-500">Your cart is empty.</Text>
//         ) : (
//           cartItems.map((item) => (
//             <View
//               key={item._id}
//               className="flex-row items-center justify-between p-4 bg-white rounded-lg mb-4 shadow"
//             >
//               <Image
//                 source={{ uri: item.productImages && item.productImages.length > 0 ? item.productImages[0] : 'https://via.placeholder.com/150' }}
//                 className="w-20 h-20 rounded-lg"
//                 resizeMode="cover"
//               />
//               <View className="flex-1 ml-4">
//                 <Text className="text-lg font-bold">{item.productName}</Text>
//                 <Text className="text-sm text-gray-500">Qty: {item.quantity}</Text>
//                 <Text className="text-base font-semibold mt-2">₹{item.discountedPrice.toFixed(2)}</Text>
//               </View>
//             </View>
//           ))
//         )}
//       </ScrollView>



    

//       <View className="p-4 bg-white rounded-lg mt-4 shadow">
//         <Text className="text-base font-semibold">
//           Subtotal: ₹{subtotal.toFixed(2)}
//         </Text>
//         {subtotal < 500 && (
//           <Text className="text-base font-semibold text-red-500">
//             Delivery Charge: ₹{deliveryCharge.toFixed(2)}
//           </Text>
//         )}
//         <Text className="text-lg font-bold mt-2">Total: ₹{total.toFixed(2)}</Text>
//       </View>
//       <TouchableOpacity
//         onPress={handleProceedToPayment}
//         className="mt-6 p-4 bg-yellow-500 rounded-lg"
//       >
//         <Text className="text-center text-white font-bold text-lg">
//           Proceed to Payment
//         </Text>
//       </TouchableOpacity>
//     </View>
//     <View className="flex-1 p-4 bg-white rounded-lg mt-4 shadow">
//       {/* Your checkout details */}
//       <ScrollView>
//         {/* Other checkout components */}
//         <EcomAddAddress
//           selectedAddress={selectedAddress}
//           onSelectAddress={(address) => setSelectedAddress(address)}
//         />
//       </ScrollView>
//     </View>
//     </>
//   );
// };

// export default CheckoutScreen;


// app/checkout.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from './contexts/CartContext';
import EcomAddAddress, { ShippingAddress } from '@/components/EcomComponents/EcomAddAddress';

const CheckoutScreen: React.FC = () => {
  const { cartItems } = useCart();
  const router = useRouter();

  // Calculate subtotal and total (with delivery charge)
  const deliveryCharge = 100;
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );
  const total = subtotal < 500 ? subtotal + deliveryCharge : subtotal;

  // State for the selected address
  const [selectedAddress, setSelectedAddress] = useState<ShippingAddress | null>(null);

  // Handler for proceeding to payment (add your payment logic as needed)
  const handleProceedToPayment = () => {
    if (!selectedAddress) {
      Alert.alert('No Address Selected', 'Please select or add an address to proceed.');
      return;
    }
    Alert.alert('Payment', 'Proceeding to payment...');
    // e.g., router.push('/payment')
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Checkout',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.push('/cart')}
              style={{ marginLeft: 16 }}
              className="flex-row items-center"
            >
              <Ionicons name="arrow-back" size={24} color="#007aff" />
              <Text style={{ fontSize: 16, color: '#007aff' }}>Cart</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <View className="flex-1 bg-white p-4">
        <ScrollView showsVerticalScrollIndicator={false} className="mb-4">
          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <Text className="text-center text-gray-500">Your cart is empty.</Text>
          ) : (
            cartItems.map((item) => (
              <View
                key={item._id}
                className="flex-row items-center justify-between p-4 bg-white rounded-lg mb-4 shadow"
              >
                <Image
                  source={{
                    uri:
                      item.productImages && item.productImages.length > 0
                        ? item.productImages[0]
                        : 'https://via.placeholder.com/150',
                  }}
                  className="w-20 h-20 rounded-lg"
                  resizeMode="cover"
                />
                <View className="flex-1 ml-4">
                  <Text className="text-lg font-bold">{item.productName}</Text>
                  <Text className="text-sm text-gray-500">Qty: {item.quantity}</Text>
                  <Text className="text-base font-semibold mt-2">
                    ₹{item.discountedPrice.toFixed(2)}
                  </Text>
                </View>
              </View>
            ))
          )}
        </ScrollView>

        {/* Address Section */}
        <View className="mb-4 shadow">
          <EcomAddAddress
            selectedAddress={selectedAddress}
            onSelectAddress={(address) => setSelectedAddress(address)}
          />
        </View>

        {/* Order Summary */}
        <View className="p-4 bg-white rounded-lg mb-4 shadow">
          <Text className="text-base font-semibold">
            Subtotal: ₹{subtotal.toFixed(2)}
          </Text>
          {subtotal < 500 && (
            <Text className="text-base font-semibold text-red-500">
              Delivery Charge: ₹{deliveryCharge.toFixed(2)}
            </Text>
          )}
          <Text className="text-lg font-bold mt-2">
            Total: ₹{total.toFixed(2)}
          </Text>
        </View>

        {/* Proceed to Payment Button */}
        <TouchableOpacity
          onPress={handleProceedToPayment}
          className="mt-6 p-4 mb-5 bg-yellow-500 rounded-lg"
        >
          <Text className="text-center  text-white font-bold text-lg">
            Proceed to Payment
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CheckoutScreen;