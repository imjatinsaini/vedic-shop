// ecomTempleOfferings.tsx
import React from 'react';
import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native';
import EcomProduct from './ecomproduct';// Adjust path if needed
import { useFetchProducts } from './ecomAPI';

const EcomTempleOfferings: React.FC = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    Alert.alert('Error', error);
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Error: {error}</Text>
      </View>
    );
  }

  // Filter products where the productCategory name is "Temple Offerings" (case-insensitive)
  const templeOfferingsProducts = products.filter(
    (product) =>
      product.productCategory?.name.toLowerCase() === 'temple offerings'
  );

  return (
    <View className="mt-4 px-4 py-3 bg-white rounded-lg">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-bold text-gray-800">Temple Offerings</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {templeOfferingsProducts.map((product) => (
          <EcomProduct key={product._id} {...product} />
        ))}
      </ScrollView>
    </View>
  );
};

export default EcomTempleOfferings;