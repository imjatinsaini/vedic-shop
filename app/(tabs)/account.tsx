import AddressCard from "@/components/component/AddressCard";
import PersonalInfo from "@/components/component/PersonalInfo";
import React from "react";
import { ScrollView } from "react-native";

const AccountPage: React.FC = () => {
  return (
    <ScrollView className="flex-1 mt-14 bg-gray-100 p-4">
      <PersonalInfo />
      <AddressCard />
    </ScrollView>
  );
};

export default AccountPage;
