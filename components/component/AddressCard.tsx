import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AddressCard: React.FC = () => {
  const [addresses, setAddresses] = useState([
    {
      id: "1",
      name: "Home",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      pinCode: "10001",
      number: "1234567890",
      alternateNumber: "9876543210",
      landmark: "Near Park",
      type: "Home",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({
    id: "",
    name: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    number: "",
    alternateNumber: "",
    landmark: "",
    type: "Home",
  });

  const [errors, setErrors] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    number: "",
    alternateNumber: "",
    landmark: "",
  });

  // Validation logic
  const validateFields = () => {
    let isValid = true;
    const newErrors: any = {};

    if (!currentAddress.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!currentAddress.address.trim()) {
      newErrors.address = "Address is required.";
      isValid = false;
    }
    if (!currentAddress.city.trim()) {
      newErrors.city = "City is required.";
      isValid = false;
    }
    if (!currentAddress.state.trim()) {
      newErrors.state = "State is required.";
      isValid = false;
    }
    if (!/^\d{6}$/.test(currentAddress.pinCode)) {
      newErrors.pinCode = "Pin code must be 6 digits.";
      isValid = false;
    }
    if (!/^\d{10}$/.test(currentAddress.number)) {
      newErrors.number = "Phone number must be 10 digits.";
      isValid = false;
    }
    if (currentAddress.alternateNumber && !/^\d{10}$/.test(currentAddress.alternateNumber)) {
      newErrors.alternateNumber = "Alternate phone must be 10 digits.";
      isValid = false;
    }
    if (!currentAddress.landmark.trim()) {
      newErrors.landmark = "Landmark is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Save the address (either add or update)
  const handleSaveAddress = () => {
    if (!validateFields()) {
      return;
    }

    if (currentAddress.id) {
      // Update existing address
      setAddresses((prevAddresses) =>
        prevAddresses.map((addr) =>
          addr.id === currentAddress.id ? currentAddress : addr
        )
      );
    } else {
      // Add new address
      setAddresses((prevAddresses) => [
        ...prevAddresses,
        { ...currentAddress, id: Date.now().toString() },
      ]);
    }
    setIsModalVisible(false);
  };

  // Open modal for adding a new address
  const openAddModal = () => {
    setCurrentAddress({
      id: "",
      name: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
      number: "",
      alternateNumber: "",
      landmark: "",
      type: "Home",
    });
    setErrors({});
    setIsModalVisible(true);
  };

  // Open modal for editing an existing address
  const openEditModal = (address: typeof currentAddress) => {
    setCurrentAddress(address);
    setErrors({});
    setIsModalVisible(true);
  };

  // Delete an address
  const handleDeleteAddress = (id: string) => {
    Alert.alert(
      "Delete Address",
      "Are you sure you want to delete this address?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setAddresses((prevAddresses) =>
              prevAddresses.filter((address) => address.id !== id)
            );
          },
        },
      ]
    );
  };

  return (
    <View>
      <Text className="text-xl font-bold mb-4">Saved Addresses</Text>
      <ScrollView>
        {addresses.map((address) => (
          <View
            key={address.id}
            className="bg-white p-4 mb-4 rounded-lg shadow"
          >
            <Text className="text-lg font-semibold mb-2">{address.name}</Text>
            <Text className="text-gray-600">{address.address}</Text>
            <Text className="text-gray-600">
              {address.city}, {address.state} - {address.pinCode}
            </Text>
            <Text className="text-gray-600">Phone: {address.number}</Text>
            <Text className="text-gray-600">
              Alt Phone: {address.alternateNumber}
            </Text>
            <Text className="text-gray-600">Landmark: {address.landmark}</Text>
            <Text className="text-sm text-gray-500 mt-2 italic">
              {address.type}
            </Text>
            <View className="flex-row mt-4">
              <TouchableOpacity
                onPress={() => openEditModal(address)}
                className="flex-row items-center mr-4"
              >
                <MaterialIcons name="edit" size={20} color="blue" />
                <Text className="text-blue-500 ml-2">Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteAddress(address.id)}
                className="flex-row items-center"
              >
                <MaterialIcons name="delete" size={20} color="red" />
                <Text className="text-red-500 ml-2">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={openAddModal}
        className="bg-green-500 p-3 rounded-md mt-4"
      >
        <Text className="text-white  p-2 bg-orange-500 rounded-md text-center">Add New Address</Text>
      </TouchableOpacity>

      {/* Popup Modal */}
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center  bg bg-orange-300">
          <View className="bg-white w-11/12 p-4 gap-4 rounded-xl shadow-lg">
            <Text className="text-2xl  font-bold ">
              {currentAddress.id ? "Edit Address" : "Add New Address"}
            </Text>
            <TextInput
              placeholder="Name"
              className="border border-gray-300 rounded-md p-2 mb-1"
              value={currentAddress.name}
              onChangeText={(text) =>
                setCurrentAddress({ ...currentAddress, name: text })
              }
            />
            {errors.name && <Text className="text-red-500">{errors.name}</Text>}
            <TextInput
              placeholder="Address"
              className="border border-gray-300 rounded-md p-2 mb-1"
              value={currentAddress.address}
              onChangeText={(text) =>
                setCurrentAddress({ ...currentAddress, address: text })
              }
            />
            {errors.address && (
              <Text className="text-red-500">{errors.address}</Text>
            )}
            <TextInput
              placeholder="City"
              className="border border-gray-300 rounded-md p-2 mb-1"
              value={currentAddress.city}
              onChangeText={(text) =>
                setCurrentAddress({ ...currentAddress, city: text })
              }
            />
            {errors.city && <Text className="text-red-500">{errors.city}</Text>}
            <TextInput
              placeholder="State"
              className="border border-gray-300 rounded-md p-2 mb-1"
              value={currentAddress.state}
              onChangeText={(text) =>
                setCurrentAddress({ ...currentAddress, state: text })
              }
            />
            {errors.state && (
              <Text className="text-red-500">{errors.state}</Text>
            )}
            <TextInput
              placeholder="Pin Code"
              className="border border-gray-300 rounded-md p-2 mb-1"
              value={currentAddress.pinCode}
              keyboardType="numeric"
              onChangeText={(text) =>
                setCurrentAddress({ ...currentAddress, pinCode: text })
              }
            />
            {errors.pinCode && (
              <Text className="text-red-500">{errors.pinCode}</Text>
            )}
            <TextInput
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md p-2 mb-1"
              value={currentAddress.number}
              keyboardType="numeric"
              onChangeText={(text) =>
                setCurrentAddress({ ...currentAddress, number: text })
              }
            />
            {errors.number && (
              <Text className="text-red-500">{errors.number}</Text>
            )}
            <TextInput
              placeholder="Alternate Phone Number"
              className="border border-gray-300 rounded-md p-2 mb-1"
              value={currentAddress.alternateNumber}
              keyboardType="numeric"
              onChangeText={(text) =>
                setCurrentAddress({ ...currentAddress, alternateNumber: text })
              }
            />
            {errors.alternateNumber && (
              <Text className="text-red-500">{errors.alternateNumber}</Text>
            )}
            <TextInput
              placeholder="Landmark"
              className="border border-gray-300 rounded-md p-2 mb-1"
              value={currentAddress.landmark}
              onChangeText={(text) =>
                setCurrentAddress({ ...currentAddress, landmark: text })
              }
            />
            {errors.landmark && (
              <Text className="text-red-500">{errors.landmark}</Text>
            )}
            <View className="mb-4">
              <Text className="text-gray-700 mb-2">Save Address As:</Text>
              <View className="flex-row  gap-4 space-x-4">
                {["Home", "Work", "Other"].map((type) => (
                  <TouchableOpacity
                    key={type}
                    onPress={() =>
                      setCurrentAddress({ ...currentAddress, type })
                    }
                    className={`px-4 py-2 rounded-md ${
                      currentAddress.type === type
                        ? "bg-blue-500"
                        : "bg-gray-200"
                    }`}
                  >
                    <Text
                      className={`text-sm ${
                        currentAddress.type === type
                          ? "text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {type}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View className="flex-row justify-end space-x-4">
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSaveAddress}
                className="bg-blue-500 px-4 py-2 rounded-md"
              >
                <Text className="text-white">Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddressCard;
