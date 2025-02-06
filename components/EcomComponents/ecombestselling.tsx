// ecombestselling.tsx
import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import EcomProduct, { EcomProductProps } from './ecomproduct';// Adjust this import as needed
import { useFetchProducts } from './ecomAPI';

const EcomBestSelling: React.FC = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }

  // For this example, we sort the products by highest rating.
  // (You can change the sorting criteria as needed, e.g. using reviews.)
  const bestSellingProducts = [...products]
    .sort((a: Product, b: Product) => b.productRating - a.productRating)
    .slice(0, 10);

  return (
    <View className="my-4">
      <Text className="text-xl font-bold text-gray-800 mb-2 px-4">
        Best Selling Products
      </Text>
      <FlatList
        data={bestSellingProducts}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <EcomProduct
            id={item._id}
            category={item.productCategory.name}
            subcategory={item.subCategories}
            name={item.productName}
            images={item.productImages}
            price={item.discountedPrice}
            originalPrice={item.originalPrice}
            rating={item.productRating}
            reviews={item.productReview}
            storeName={item.shop.name}
            stock={item.stock}
            shopId={item.shop.id}
          />
        )}
      />
    </View>
  );
};

export default EcomBestSelling;