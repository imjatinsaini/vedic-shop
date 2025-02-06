import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const PersonalInfo: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    phone: "1234567890",
    email: "john.doe@example.com",
    gender: "Male",
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <View className="bg-white p-4 mb-6 rounded-lg shadow">
      <Text className="text-xl font-bold mb-4">Personal Information</Text>
      <View className="mb-4">
        <Text className="text-gray-700">Name:</Text>
        {isEditing ? (
          <TextInput
            className="border border-gray-300 rounded-md p-2 mt-1"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
        ) : (
          <Text className="text-gray-600 mt-1">{formData.name}</Text>
        )}
      </View>
      <View className="mb-4">
        <Text className="text-gray-700">Phone:</Text>
        {isEditing ? (
          <TextInput
            className="border border-gray-300 rounded-md p-2 mt-1"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
          />
        ) : (
          <Text className="text-gray-600 mt-1">{formData.phone}</Text>
        )}
      </View>
      <View className="mb-4">
        <Text className="text-gray-700">Email:</Text>
        <Text className="text-gray-600 mt-1">{formData.email}</Text>
      </View>
      <View className="mb-4">
        <Text className="text-gray-700">Gender:</Text>
        {isEditing ? (
          <TextInput
            className="border border-gray-300 rounded-md p-2 mt-1"
            value={formData.gender}
            onChangeText={(text) => setFormData({ ...formData, gender: text })}
          />
        ) : (
          <Text className="text-gray-600 mt-1">{formData.gender}</Text>
        )}
      </View>
      <TouchableOpacity
        onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
        className="bg-blue-500 p-3 rounded-md"
      >
        <Text className="text-white text-center">
          {isEditing ? "Save" : "Edit"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PersonalInfo;
