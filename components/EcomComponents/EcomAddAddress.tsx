// // EcomAddAddress.tsx
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Modal,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from 'react-native';

// export interface ShippingAddress {
//   id: string;
//   name: string;
//   pinCode: string;
//   city: string;
//   state: string;
//   number: string;
//   alternateNumber?: string;
//   address: string;
//   landmark?: string;
//   addressType: 'home' | 'work' | 'other';
//   addedOn: Date;
// }

// interface EcomAddAddressProps {
//   onSelectAddress: (address: ShippingAddress | null) => void;
//   selectedAddress: ShippingAddress | null;
// }

// const EcomAddAddress: React.FC<EcomAddAddressProps> = ({
//   onSelectAddress,
//   selectedAddress,
// }) => {
//   // Local state to hold addresses
//   const [addresses, setAddresses] = useState<ShippingAddress[]>([]);
//   // Control modal visibility for adding a new address
//   const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
//   // Hold the current address being added/edited (for now, we support adding only)
//   const [currentAddress, setCurrentAddress] = useState<Partial<ShippingAddress>>({
//     addressType: 'home',
//   });

//   // Function to add a new address locally
//   const handleAddAddress = () => {
//     // Validate required fields
//     if (
//       !currentAddress.name ||
//       !currentAddress.number ||
//       !currentAddress.address ||
//       !currentAddress.pinCode ||
//       !currentAddress.city ||
//       !currentAddress.state
//     ) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     const newAddress: ShippingAddress = {
//       id: Date.now().toString(),
//       name: currentAddress.name,
//       number: currentAddress.number,
//       alternateNumber: currentAddress.alternateNumber,
//       address: currentAddress.address,
//       landmark: currentAddress.landmark,
//       pinCode: currentAddress.pinCode,
//       city: currentAddress.city,
//       state: currentAddress.state,
//       addressType: currentAddress.addressType as 'home' | 'work' | 'other',
//       addedOn: new Date(),
//     };

//     setAddresses((prev) => [...prev, newAddress]);
//     // Automatically select the newly added address
//     onSelectAddress(newAddress);
//     setIsModalVisible(false);
//     // Reset the form
//     setCurrentAddress({ addressType: 'home' });
//   };

//   return (
//     <View className="p-4 bg-white ">
//       <Text className="text-xl font-bold mb-4">Your Addresses</Text>

//       {/* List of Addresses */}
//       {addresses.length === 0 ? (
//         <Text className="text-gray-500 mb-4">
//           No addresses added yet.
//         </Text>
//       ) : (
//         addresses.map((addr) => (
//           <TouchableOpacity
//             key={addr.id}
//             onPress={() => onSelectAddress(addr)}
//             className={`p-4 border rounded-lg mb-3 ${
//               selectedAddress?.id === addr.id
//                 ? 'border-orange-500 bg-orange-100'
//                 : 'border-gray-300'
//             }`}
//           >
//             <Text className="font-semibold">{addr.name}</Text>
//             <Text>
//               {addr.address}
//               {addr.landmark ? `, ${addr.landmark}` : ''}
//             </Text>
//             <Text>
//               {addr.city}, {addr.state} - {addr.pinCode}
//             </Text>
//             <Text className="text-sm text-gray-500">Phone: {addr.number}</Text>
//           </TouchableOpacity>
//         ))
//       )}

//       {/* Button to Add New Address */}
//       <TouchableOpacity
//         onPress={() => setIsModalVisible(true)}
//         className="bg-orange-500 p-4 rounded-lg mt-4"
//       >
//         <Text className="text-white text-center font-bold">
//           + Add New Address
//         </Text>
//       </TouchableOpacity>

//       {/* Modal for Adding a New Address */}
//       <Modal visible={isModalVisible} animationType="slide" transparent={true}>
//         <View className="flex-1 justify-center bg-black bg-opacity-50 p-4">
//           <View className="bg-white rounded-lg p-4 max-h-full">
//             <ScrollView>
//               <Text className="text-xl font-bold mb-4">
//                 {currentAddress.id ? 'Edit Address' : 'Add New Address'}
//               </Text>
//               {/* Full Name */}
//               <Text className="mb-1">Full Name</Text>
//               <TextInput
//                 placeholder="Enter full name"
//                 value={currentAddress.name as string}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, name: text }))
//                 }
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* Phone Number */}
//               <Text className="mb-1">Phone Number</Text>
//               <TextInput
//                 placeholder="Enter phone number"
//                 value={currentAddress.number as string}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, number: text }))
//                 }
//                 keyboardType="phone-pad"
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* Alternate Phone Number */}
//               <Text className="mb-1">Alternate Phone Number (Optional)</Text>
//               <TextInput
//                 placeholder="Enter alternate phone number"
//                 value={currentAddress.alternateNumber as string}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({
//                     ...prev,
//                     alternateNumber: text,
//                   }))
//                 }
//                 keyboardType="phone-pad"
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* Address */}
//               <Text className="mb-1">Address</Text>
//               <TextInput
//                 placeholder="Enter address"
//                 value={currentAddress.address as string}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, address: text }))
//                 }
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//                 multiline
//               />

//               {/* Landmark */}
//               <Text className="mb-1">Landmark</Text>
//               <TextInput
//                 placeholder="Enter landmark"
//                 value={currentAddress.landmark as string}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, landmark: text }))
//                 }
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* Pincode */}
//               <Text className="mb-1">Pin Code</Text>
//               <TextInput
//                 placeholder="Enter pin code"
//                 value={currentAddress.pinCode as string}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, pinCode: text }))
//                 }
//                 keyboardType="numeric"
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* City */}
//               <Text className="mb-1">City</Text>
//               <TextInput
//                 placeholder="Enter city"
//                 value={currentAddress.city as string}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, city: text }))
//                 }
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* State */}
//               <Text className="mb-1">State</Text>
//               <TextInput
//                 placeholder="Enter state"
//                 value={currentAddress.state as string}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, state: text }))
//                 }
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* Address Type */}
//               <Text className="mb-1">Address Type</Text>
//               <View className="flex-row space-x-4 mb-3">
//                 <TouchableOpacity
//                   onPress={() =>
//                     setCurrentAddress((prev) => ({ ...prev, addressType: 'home' }))
//                   }
//                   className={`p-2 border rounded-md ${
//                     currentAddress.addressType === 'home'
//                       ? 'border-orange-500 bg-orange-100'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   <Text>Home</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() =>
//                     setCurrentAddress((prev) => ({ ...prev, addressType: 'work' }))
//                   }
//                   className={`p-2 border rounded-md ${
//                     currentAddress.addressType === 'work'
//                       ? 'border-orange-500 bg-orange-100'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   <Text>Work</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() =>
//                     setCurrentAddress((prev) => ({
//                       ...prev,
//                       addressType: 'other',
//                     }))
//                   }
//                   className={`p-2 border rounded-md ${
//                     currentAddress.addressType === 'other'
//                       ? 'border-orange-500 bg-orange-100'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   <Text>Other</Text>
//                 </TouchableOpacity>
//               </View>
//             </ScrollView>
//             <View className="flex-row justify-end space-x-4 mt-4">
//               <TouchableOpacity
//                 onPress={() => {
//                   setIsModalVisible(false);
//                   setCurrentAddress({ addressType: 'home' });
//                 }}
//                 className="px-4 py-2 border rounded-md"
//               >
//                 <Text>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={handleAddAddress}
//                 className="px-4 py-2 bg-orange-500 rounded-md"
//               >
//                 <Text className="text-white">Save Address</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default EcomAddAddress;



// // EcomAddAddress.tsx
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Modal,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
//   Alert,
// } from 'react-native';

// export interface ShippingAddress {
//   id: string;
//   name: string;
//   pinCode: string;
//   city: string;
//   state: string;
//   number: string;
//   alternateNumber?: string;
//   address: string;
//   landmark?: string;
//   addressType: 'home' | 'work' | 'other';
//   addedOn: Date;
// }

// interface EcomAddAddressProps {
//   onSelectAddress: (address: ShippingAddress | null) => void;
//   selectedAddress: ShippingAddress | null;
// }

// const EcomAddAddress: React.FC<EcomAddAddressProps> = ({
//   onSelectAddress,
//   selectedAddress,
// }) => {
//   // Local state for addresses
//   const [addresses, setAddresses] = useState<ShippingAddress[]>([]);
//   // Control modal visibility for adding a new address
//   const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
//   // Control dropdown open state
//   const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
//   // Hold the current address being added/edited (for now, only adding is supported)
//   const [currentAddress, setCurrentAddress] = useState<Partial<ShippingAddress>>({
//     addressType: 'home',
//   });

//   // Function to add a new address locally
//   const handleAddAddress = () => {
//     // Validate required fields
//     if (
//       !currentAddress.name ||
//       !currentAddress.number ||
//       !currentAddress.address ||
//       !currentAddress.pinCode ||
//       !currentAddress.city ||
//       !currentAddress.state
//     ) {
//       Alert.alert('Validation Error', 'Please fill in all required fields.');
//       return;
//     }

//     const newAddress: ShippingAddress = {
//       id: Date.now().toString(),
//       name: currentAddress.name,
//       number: currentAddress.number,
//       alternateNumber: currentAddress.alternateNumber,
//       address: currentAddress.address,
//       landmark: currentAddress.landmark,
//       pinCode: currentAddress.pinCode,
//       city: currentAddress.city,
//       state: currentAddress.state,
//       addressType: currentAddress.addressType as 'home' | 'work' | 'other',
//       addedOn: new Date(),
//     };

//     setAddresses((prev) => [...prev, newAddress]);
//     // Automatically select the newly added address and close dropdown
//     onSelectAddress(newAddress);
//     setDropdownOpen(false);
//     setIsModalVisible(false);
//     // Reset the form
//     setCurrentAddress({ addressType: 'home' });
//   };

//   // Render a summary text for the selected address
//   const renderSelectedAddressSummary = () => {
//     if (selectedAddress) {
//       return (
//         <View>
//           <Text className="font-semibold">{selectedAddress.name}</Text>
//           <Text className="text-sm text-gray-600">
//             {selectedAddress.address}
//             {selectedAddress.landmark ? `, ${selectedAddress.landmark}` : ''}
//           </Text>
//           <Text className="text-sm text-gray-600">
//             {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pinCode}
//           </Text>
//         </View>
//       );
//     }
//     return <Text className="text-gray-500">Select Address</Text>;
//   };

//   return (
//     <View className="p-4 bg-white">
//       <Text className="text-xl font-bold mb-4">Delivery Address</Text>

//       {/* Dropdown Button */}
//       <TouchableOpacity
//         onPress={() => setDropdownOpen(!dropdownOpen)}
//         className="border border-gray-300 rounded-lg p-4 flex-row items-center justify-between"
//       >
//         {renderSelectedAddressSummary()}
//         <Text className="text-xl">{dropdownOpen ? '▲' : '▼'}</Text>
//       </TouchableOpacity>

//       {/* Dropdown List */}
//       {dropdownOpen && (
//         <View className="border border-gray-300 rounded-lg mt-2 bg-white shadow">
//           <ScrollView style={{ maxHeight: 200 }}>
//             {addresses.length === 0 ? (
//               <Text className="text-gray-500 p-4">No addresses added yet.</Text>
//             ) : (
//               addresses.map((addr) => (
//                 <TouchableOpacity
//                   key={addr.id}
//                   onPress={() => {
//                     onSelectAddress(addr);
//                     setDropdownOpen(false);
//                   }}
//                   className={`p-4 border-b border-gray-200 ${
//                     selectedAddress?.id === addr.id
//                       ? 'bg-orange-100'
//                       : 'bg-white'
//                   }`}
//                 >
//                   <Text className="font-semibold">{addr.name}</Text>
//                   <Text className="text-sm text-gray-600">
//                     {addr.address}
//                     {addr.landmark ? `, ${addr.landmark}` : ''}
//                   </Text>
//                   <Text className="text-sm text-gray-600">
//                     {addr.city}, {addr.state} - {addr.pinCode}
//                   </Text>
//                 </TouchableOpacity>
//               ))
//             )}
//           </ScrollView>
//           <TouchableOpacity
//             onPress={() => {
//               setIsModalVisible(true);
//               setDropdownOpen(false);
//             }}
//             className="bg-orange-500 p-4 rounded-b-lg"
//           >
//             <Text className="text-white text-center font-bold">
//               + Add New Address
//             </Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* Modal for Adding a New Address */}
//       <Modal visible={isModalVisible} animationType="slide" transparent={true}>
//         <View className="flex-1 justify-center items-center bg-black bg-opacity-50 p-4">
//           <View className="bg-white rounded-lg p-4 w-11/12 max-h-[80%]">
//             <ScrollView>
//               <Text className="text-xl font-bold mb-4">
//                 {currentAddress.id ? 'Edit Address' : 'Add New Address'}
//               </Text>
//               {/* Full Name */}
//               <Text className="mb-1">Full Name</Text>
//               <TextInput
//                 placeholder="Enter full name"
//                 value={currentAddress.name || ''}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, name: text }))
//                 }
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* Phone Number */}
//               <Text className="mb-1">Phone Number</Text>
//               <TextInput
//                 placeholder="Enter phone number"
//                 value={currentAddress.number || ''}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, number: text }))
//                 }
//                 keyboardType="phone-pad"
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* Alternate Phone Number */}
//               <Text className="mb-1">Alternate Phone Number (Optional)</Text>
//               <TextInput
//                 placeholder="Enter alternate phone number"
//                 value={currentAddress.alternateNumber || ''}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({
//                     ...prev,
//                     alternateNumber: text,
//                   }))
//                 }
//                 keyboardType="phone-pad"
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* Address */}
//               <Text className="mb-1">Address</Text>
//               <TextInput
//                 placeholder="Enter address"
//                 value={currentAddress.address || ''}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, address: text }))
//                 }
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//                 multiline
//               />

//               {/* Landmark */}
//               <Text className="mb-1">Landmark</Text>
//               <TextInput
//                 placeholder="Enter landmark"
//                 value={currentAddress.landmark || ''}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, landmark: text }))
//                 }
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* Pin Code */}
//               <Text className="mb-1">Pin Code</Text>
//               <TextInput
//                 placeholder="Enter pin code"
//                 value={currentAddress.pinCode || ''}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, pinCode: text }))
//                 }
//                 keyboardType="numeric"
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* City */}
//               <Text className="mb-1">City</Text>
//               <TextInput
//                 placeholder="Enter city"
//                 value={currentAddress.city || ''}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, city: text }))
//                 }
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* State */}
//               <Text className="mb-1">State</Text>
//               <TextInput
//                 placeholder="Enter state"
//                 value={currentAddress.state || ''}
//                 onChangeText={(text) =>
//                   setCurrentAddress((prev) => ({ ...prev, state: text }))
//                 }
//                 className="border border-gray-300 p-2 rounded-md mb-3"
//               />

//               {/* Address Type */}
//               <Text className="mb-1">Address Type</Text>
//               <View className="flex-row space-x-4 mb-3">
//                 <TouchableOpacity
//                   onPress={() =>
//                     setCurrentAddress((prev) => ({ ...prev, addressType: 'home' }))
//                   }
//                   className={`p-2 border rounded-md ${
//                     currentAddress.addressType === 'home'
//                       ? 'border-orange-500 bg-orange-100'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   <Text>Home</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() =>
//                     setCurrentAddress((prev) => ({ ...prev, addressType: 'work' }))
//                   }
//                   className={`p-2 border rounded-md ${
//                     currentAddress.addressType === 'work'
//                       ? 'border-orange-500 bg-orange-100'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   <Text>Work</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() =>
//                     setCurrentAddress((prev) => ({
//                       ...prev,
//                       addressType: 'other',
//                     }))
//                   }
//                   className={`p-2 border rounded-md ${
//                     currentAddress.addressType === 'other'
//                       ? 'border-orange-500 bg-orange-100'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   <Text>Other</Text>
//                 </TouchableOpacity>
//               </View>
//             </ScrollView>
//             <View className="flex-row justify-end space-x-4 mt-4">
//               <TouchableOpacity
//                 onPress={() => {
//                   setIsModalVisible(false);
//                   setCurrentAddress({ addressType: 'home' });
//                 }}
//                 className="px-4 py-2 border rounded-md"
//               >
//                 <Text>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={handleAddAddress}
//                 className="px-4 py-2 bg-orange-500 rounded-md"
//               >
//                 <Text className="text-white">Save Address</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default EcomAddAddress;



// EcomAddAddress.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

export interface ShippingAddress {
  id: string;
  name: string;
  pinCode: string;
  city: string;
  state: string;
  number: string;
  alternateNumber?: string;
  address: string;
  landmark?: string;
  addressType: 'home' | 'work' | 'other';
  addedOn: Date;
}

interface EcomAddAddressProps {
  onSelectAddress: (address: ShippingAddress | null) => void;
  selectedAddress: ShippingAddress | null;
}

const EcomAddAddress: React.FC<EcomAddAddressProps> = ({
  onSelectAddress,
  selectedAddress,
}) => {
  // Local state for addresses
  const [addresses, setAddresses] = useState<ShippingAddress[]>([]);
  // Control modal visibility for adding a new address
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  // Control dropdown visibility for address selection
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  // Hold the current address being added/edited (for now, we support adding only)
  const [currentAddress, setCurrentAddress] = useState<Partial<ShippingAddress>>({
    addressType: 'home',
  });

  // Function to add a new address locally with validations
  const handleAddAddress = () => {
    // Validate required fields
    if (
      !currentAddress.name ||
      !currentAddress.number ||
      !currentAddress.address ||
      !currentAddress.pinCode ||
      !currentAddress.city ||
      !currentAddress.state
    ) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }

    // Validate that pin code is exactly 6 digits
    if (currentAddress.pinCode.length !== 6) {
      Alert.alert('Validation Error', 'Pin Code must be exactly 6 digits.');
      return;
    }

    // Validate that phone number is exactly 10 digits
    if (currentAddress.number.length !== 10) {
      Alert.alert('Validation Error', 'Phone Number must be exactly 10 digits.');
      return;
    }

    // If alternate number is provided, validate its length
    if (
      currentAddress.alternateNumber &&
      currentAddress.alternateNumber.length !== 10
    ) {
      Alert.alert(
        'Validation Error',
        'Alternate Phone Number must be exactly 10 digits.'
      );
      return;
    }

    const newAddress: ShippingAddress = {
      id: Date.now().toString(),
      name: currentAddress.name,
      number: currentAddress.number,
      alternateNumber: currentAddress.alternateNumber,
      address: currentAddress.address,
      landmark: currentAddress.landmark,
      pinCode: currentAddress.pinCode,
      city: currentAddress.city,
      state: currentAddress.state,
      addressType: currentAddress.addressType as 'home' | 'work' | 'other',
      addedOn: new Date(),
    };

    setAddresses((prev) => [...prev, newAddress]);
    // Automatically select the newly added address and close dropdown
    onSelectAddress(newAddress);
    setIsDropdownOpen(false);
    setIsModalVisible(false);
    // Reset the form
    setCurrentAddress({ addressType: 'home' });
  };

  // Render a summary for the selected address
  const renderSelectedAddressSummary = () => {
    if (selectedAddress) {
      return (
        <View>
          <Text className="font-semibold">{selectedAddress.name}</Text>
          <Text className="text-sm text-gray-600">
            {selectedAddress.address}
            {selectedAddress.landmark ? `, ${selectedAddress.landmark}` : ''}
          </Text>
          <Text className="text-sm text-gray-600">
            {selectedAddress.city}, {selectedAddress.state} -{' '}
            {selectedAddress.pinCode}
          </Text>
          <Text className="text-sm text-gray-500">
            Phone: {selectedAddress.number}
          </Text>
        </View>
      );
    }
    return <Text className="text-gray-500">Select Address</Text>;
  };

  return (
    <View className="p-4 bg-white">
      <Text className="text-xl font-bold mb-4">Shipping Address</Text>

      {/* Dropdown Button */}
      <TouchableOpacity
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
        className="p-4 border border-gray-300 rounded-lg flex-row items-center justify-between"
      >
        {renderSelectedAddressSummary()}
        <Text className="text-xl">{isDropdownOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {/* Dropdown List */}
      {isDropdownOpen && (
        <View className="border border-gray-300 rounded-lg mt-2 bg-white shadow max-h-60">
          <ScrollView>
            {addresses.length === 0 ? (
              <Text className="text-gray-500 p-4">No addresses added yet.</Text>
            ) : (
              addresses.map((addr) => (
                <TouchableOpacity
                  key={addr.id}
                  onPress={() => {
                    onSelectAddress(addr);
                    setIsDropdownOpen(false);
                  }}
                  className="p-4 border-b border-gray-300"
                >
                  <Text className="font-semibold">{addr.name}</Text>
                  <Text className="text-sm text-gray-600">
                    {addr.address}
                    {addr.landmark ? `, ${addr.landmark}` : ''}
                  </Text>
                  <Text className="text-sm text-gray-600">
                    {addr.city}, {addr.state} - {addr.pinCode}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    Phone: {addr.number}
                  </Text>
                </TouchableOpacity>
              ))
            )}
            {/* Option to Add a New Address */}
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(true);
                setIsDropdownOpen(false);
              }}
              className="bg-orange-500 p-4 rounded-lg m-4"
            >
              <Text className="text-white text-center font-bold">
                + Add New Address
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}

      {/* Modal for Adding a New Address */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50 p-4">
          <View className="bg-white rounded-lg p-4 w-11/12 max-h-[80%]">
            <ScrollView>
              <Text className="text-xl font-bold mb-4">
                {currentAddress.id ? 'Edit Address' : 'Add New Address'}
              </Text>

              {/* Full Name */}
              <Text className="mb-1">Full Name</Text>
              <TextInput
                placeholder="Enter full name"
                value={currentAddress.name || ''}
                onChangeText={(text) =>
                  setCurrentAddress((prev) => ({ ...prev, name: text }))
                }
                className="border border-gray-300 p-2 rounded-md mb-3"
              />

              {/* Phone Number */}
              <Text className="mb-1">Phone Number</Text>
              <TextInput
                placeholder="Enter phone number"
                value={currentAddress.number || ''}
                onChangeText={(text) =>
                  setCurrentAddress((prev) => ({ ...prev, number: text }))
                }
                keyboardType="phone-pad"
                maxLength={10}
                className="border border-gray-300 p-2 rounded-md mb-3"
              />

              {/* Alternate Phone Number */}
              <Text className="mb-1">Alternate Phone Number (Optional)</Text>
              <TextInput
                placeholder="Enter alternate phone number"
                value={currentAddress.alternateNumber || ''}
                onChangeText={(text) =>
                  setCurrentAddress((prev) => ({ ...prev, alternateNumber: text }))
                }
                keyboardType="phone-pad"
                maxLength={10}
                className="border border-gray-300 p-2 rounded-md mb-3"
              />

              {/* Address */}
              <Text className="mb-1">Address</Text>
              <TextInput
                placeholder="Enter address"
                value={currentAddress.address || ''}
                onChangeText={(text) =>
                  setCurrentAddress((prev) => ({ ...prev, address: text }))
                }
                className="border border-gray-300 p-2 rounded-md mb-3"
                multiline
              />

              {/* Landmark */}
              <Text className="mb-1">Landmark</Text>
              <TextInput
                placeholder="Enter landmark"
                value={currentAddress.landmark || ''}
                onChangeText={(text) =>
                  setCurrentAddress((prev) => ({ ...prev, landmark: text }))
                }
                className="border border-gray-300 p-2 rounded-md mb-3"
              />

              {/* Pin Code */}
              <Text className="mb-1">Pin Code</Text>
              <TextInput
                placeholder="Enter pin code"
                value={currentAddress.pinCode || ''}
                onChangeText={(text) =>
                  setCurrentAddress((prev) => ({ ...prev, pinCode: text }))
                }
                keyboardType="numeric"
                maxLength={6}
                className="border border-gray-300 p-2 rounded-md mb-3"
              />

              {/* City */}
              <Text className="mb-1">City</Text>
              <TextInput
                placeholder="Enter city"
                value={currentAddress.city || ''}
                onChangeText={(text) =>
                  setCurrentAddress((prev) => ({ ...prev, city: text }))
                }
                className="border border-gray-300 p-2 rounded-md mb-3"
              />

              {/* State */}
              <Text className="mb-1">State</Text>
              <TextInput
                placeholder="Enter state"
                value={currentAddress.state || ''}
                onChangeText={(text) =>
                  setCurrentAddress((prev) => ({ ...prev, state: text }))
                }
                className="border border-gray-300 p-2 rounded-md mb-3"
              />

              {/* Address Type */}
              <Text className="mb-1">Address Type</Text>
              <View className="flex-row space-x-4 mb-3">
                <TouchableOpacity
                  onPress={() =>
                    setCurrentAddress((prev) => ({ ...prev, addressType: 'home' }))
                  }
                  className={`p-2 border rounded-md ${
                    currentAddress.addressType === 'home'
                      ? 'border-orange-500 bg-orange-100'
                      : 'border-gray-300'
                  }`}
                >
                  <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    setCurrentAddress((prev) => ({ ...prev, addressType: 'work' }))
                  }
                  className={`p-2 border rounded-md ${
                    currentAddress.addressType === 'work'
                      ? 'border-orange-500 bg-orange-100'
                      : 'border-gray-300'
                  }`}
                >
                  <Text>Work</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    setCurrentAddress((prev) => ({ ...prev, addressType: 'other' }))
                  }
                  className={`p-2 border rounded-md ${
                    currentAddress.addressType === 'other'
                      ? 'border-orange-500 bg-orange-100'
                      : 'border-gray-300'
                  }`}
                >
                  <Text>Other</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View className="flex-row justify-end space-x-4 mt-4">
              <TouchableOpacity
                onPress={() => {
                  setIsModalVisible(false);
                  setCurrentAddress({ addressType: 'home' });
                }}
                className="px-4 py-2 border rounded-md"
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleAddAddress}
                className="px-4 py-2 bg-orange-500 rounded-md"
              >
                <Text className="text-white">Save Address</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EcomAddAddress;