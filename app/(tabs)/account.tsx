// import AddressCard from "@/components/component/AddressCard";
// import PersonalInfo from "@/components/component/PersonalInfo";
// import React from "react";
// import { ScrollView } from "react-native";

// const AccountPage: React.FC = () => {
//   return (
//     <ScrollView className="flex-1 mt-14 bg-gray-100 p-4">
//       <PersonalInfo />
//       <AddressCard />
//     </ScrollView>
//   );
// };

// export default AccountPage;

// app/(tabs)/AccountPage.tsx


import React, { useState, useEffect } from 'react';
import { ScrollView, Modal, View, Text, TouchableOpacity } from 'react-native';
import AddressCard from '@/components/component/AddressCard';
import PersonalInfo from '@/components/component/PersonalInfo';
import { useAuth } from '../contexts/AuthContext';
import GoogleAuth from '@/components/auth/GoogleAuth';

const AccountPage: React.FC = () => {
  const { user } = useAuth();
  const [showGoogleModal, setShowGoogleModal] = useState(false);

  // When the component mounts, if no user is found, show the Google sign-in modal.
  useEffect(() => {
    if (!user) {
      setShowGoogleModal(true);
    }
  }, [user]);

  const handleGoogleSuccess = () => {
    setShowGoogleModal(false);
  };

  const handleGoogleFailure = () => {
    setShowGoogleModal(false);
    // Optionally, you can show an error message or try signing in again.
  };

  // If the user is not logged in, render a Modal for Google Sign-In.
  if (!user) {
    return (
      <Modal visible={showGoogleModal} animationType="slide" transparent>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-6 rounded-lg w-4/5">
            <Text className="text-lg font-semibold mb-4 text-center">
              Sign in to access your account
            </Text>
            <GoogleAuth onSuccess={handleGoogleSuccess} onFailure={handleGoogleFailure} />
            <TouchableOpacity onPress={() => setShowGoogleModal(false)}>
              <Text className="mt-4 text-center text-blue-500">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  // If the user is logged in, show the Account page content.
  return (
    <ScrollView className="flex-1 mt-14 bg-gray-100 p-4">
      <PersonalInfo />
      <AddressCard />
    </ScrollView>
  );
};

export default AccountPage;
