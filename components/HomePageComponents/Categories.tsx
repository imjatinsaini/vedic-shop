// import React from 'react';
// import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// // ----- TYPES -----
// type Category = {
//   id: string;
//   title: string;
//   icon: keyof typeof Ionicons.glyphMap;
// };

// type CategoriesProps = {
//   categories: Category[];
// };

// const Categories: React.FC<CategoriesProps> = ({ categories }) => {
//   return (
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       className="px-4 py-3"
//     >
//       {categories.map((cat) => (
//         <TouchableOpacity key={cat.id} className="mr-4 items-center">
//           <View className="w-12 h-12 bg-gray-200 rounded-full justify-center items-center mb-1">
//             <Ionicons name={cat.icon} size={22} color="#333" />
//           </View>
//           <Text className="text-xs text-gray-600">{cat.title}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// export default Categories;



// components/Categories.tsx




// // Categories.tsx
// import React from 'react';
// import { ScrollView, View, Text, Image, ActivityIndicator } from 'react-native';
// import { Link } from 'expo-router';// Adjust the path as needed
// import { useFetchProducts } from '../EcomComponents/ecomAPI';

// const Categories: React.FC = () => {
//   const { products, loading, error } = useFetchProducts();

//   // While loading, display an activity indicator
//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   // If there is an error, display it
//   if (error) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <Text>Error: {error}</Text>
//       </View>
//     );
//   }

//   // Build a dictionary of unique categories
//   const categoriesDict: {
//     [key: string]: { id: string; title: string; images: string[] };
//   } = {};

//   products.forEach((product) => {
//     // Use the product's category name (or fallback to "Uncategorized")
//     const categoryName = product.productCategory?.name || 'Uncategorized';
//     const categoryId = product.productCategory?.id || categoryName;

//     if (!categoriesDict[categoryName]) {
//       categoriesDict[categoryName] = { id: categoryId, title: categoryName, images: [] };
//     }
//     // If the product has at least one image, add its first image to the category's image array
//     if (product.productImages && product.productImages.length > 0) {
//       categoriesDict[categoryName].images.push(product.productImages[0]);
//     }
//   });

//   // Transform the dictionary into an array of categories with one random image per category
//   const categories = Object.values(categoriesDict).map((cat) => ({
//     id: cat.id,
//     title: cat.title,
//     image:
//       cat.images.length > 0
//         ? cat.images[Math.floor(Math.random() * cat.images.length)]
//         : null,
//   }));

//   return (
//     <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 py-3">
//       {categories.map((cat) => (
//         <Link key={cat.id} href={`/category/${cat.title.toLowerCase()}`} className="w-32 items-center">
//           <View className="items-center">
//             <View className="w-12 h-12 rounded-full overflow-hidden justify-center items-center mb-2 mt-2">
//               {cat.image ? (
//                 <Image source={{ uri: cat.image }} className="w-full h-full" resizeMode="cover" />
//               ) : (
//                 <View className="w-full h-full bg-gray-200 justify-center items-center">
//                   <Text className="text-xs text-gray-500">NA</Text>
//                 </View>
//               )}
//             </View>
//             <Text className="text-xs text-gray-600 text-center">{cat.title}</Text>
//           </View>
//         </Link>
//       ))}
//     </ScrollView>
//   );
// };

// export default Categories;



// Categories.tsx
import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Link } from 'expo-router';

const categories = [
  {
    id: '1',
    title: 'Vastu Sastra',
    image: 'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/hand.png',
  },
  {
    id: '2',
    title: 'Rudraksha',
    image: 'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/rudraksha.png',
  },
  {
    id: '3',
    title: 'Idols',
    image: 'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/mata.png',
  },
  {
    id: '4',
    title: 'Temple Offerings',
    image: 'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/temple123.png',
  },
  {
    id: '5',
    title: 'Bracelets',
    image: 'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/temple123.png',
  },
];

const Categories: React.FC = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="px-4 py-3"
    >
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/category/${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="mr-6 mt-2 items-center"
        >
          <View className="w-32 h-14 rounded-full overflow-hidden  shadow-sm justify-center items-center">
            <Image
              source={{ uri: cat.image }}
              className="w-12 h-12"
              resizeMode="contain"
            />
             <Text className="mt-2 text-sm text-gray-700 font-medium text-center">
            {cat.title}
          </Text>
          </View>
         
        </Link>
      ))}
    </ScrollView>
  );
};

export default Categories;