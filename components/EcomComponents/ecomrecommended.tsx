// ecomrecommended.tsx
import React from 'react';
import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native';
import EcomProduct, { EcomProductProps } from './ecomproduct'; // Adjust the path as needed
import { useFetchProducts } from './ecomAPI';

const EcomRecommended: React.FC = () => {
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

  return (
    <View className="mt-4 px-4 py-3 bg-white rounded-lg">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-bold text-gray-800">Recommended for you</Text>
      </View>
      {/* Horizontal Scroll of products */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product) => (
          // Spread the product data as props to EcomProduct
          <EcomProduct key={product._id} {...product} />
        ))}
      </ScrollView>
    </View>
  );
};

export default EcomRecommended;