import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { PopularItem } from './types';

type PopularProductsProps = {
  data: PopularItem[];
};

const PopularProducts: React.FC<PopularProductsProps> = ({ data }) => {
  return (
    <View className="w-full px-4 py-3 mt-4 bg-orange-200 rounded-lg">
      <Text className="text-lg font-bold text-gray-800 mb-3">Popular Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <View
            key={item.id}
            className="mr-4 bg-white rounded-lg p-4 w-32 items-center"
          >
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
              }}
              className="w-20 h-20 mb-2 rounded-lg"
            />
            <Text className="font-semibold text-gray-700">{item.name}</Text>
            <Text className="text-sm text-orange-600 mt-1">
              {item.discountLabel}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularProducts;
