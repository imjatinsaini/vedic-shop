// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// type SubCategoryFilterProps = {
//   subCategories: string[];
//   onChange: (selected: string[]) => void;
// };

// const SubCategoryFilter: React.FC<SubCategoryFilterProps> = ({ subCategories, onChange }) => {
//   const [selected, setSelected] = useState<string[]>([]);

//   const toggleSelection = (subCat: string) => {
//     let newSelected: string[];
//     if (selected.includes(subCat)) {
//       newSelected = selected.filter((item) => item !== subCat);
//     } else {
//       newSelected = [...selected, subCat];
//     }
//     setSelected(newSelected);
//     onChange(newSelected);
//   };

//   return (
//     <View className="p-4 bg-gray-100 rounded-lg">
//       <Text className="font-bold mb-2">Subcategories</Text>
//       <View className="flex-row flex-wrap">
//         {subCategories.map((subCat) => (
//           <TouchableOpacity
//             key={subCat}
//             onPress={() => toggleSelection(subCat)}
//             className={`flex-row items-center border rounded-full px-3 py-1 m-1 ${
//               selected.includes(subCat)
//                 ? 'bg-blue-500 border-blue-500'
//                 : 'bg-white border-gray-300'
//             }`}
//           >
//             <Text className={`text-sm ${selected.includes(subCat) ? 'text-white' : 'text-gray-700'}`}>
//               {subCat}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default SubCategoryFilter;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// type SubCategoryFilterProps = {
//   subCategories: string[];
//   onChange: (selected: string[]) => void;
// };

// const SubCategoryFilter: React.FC<SubCategoryFilterProps> = ({ subCategories, onChange }) => {
//   const [selected, setSelected] = useState<string[]>([]);
//   const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

//   const toggleSelection = (subCat: string) => {
//     let newSelected: string[];
//     if (selected.includes(subCat)) {
//       newSelected = selected.filter((item) => item !== subCat);
//     } else {
//       newSelected = [...selected, subCat];
//     }
//     setSelected(newSelected);
//     onChange(newSelected);
//   };

//   const removeItem = (subCat: string) => {
//     const newSelected = selected.filter((item) => item !== subCat);
//     setSelected(newSelected);
//     onChange(newSelected);
//   };

//   const clearAll = () => {
//     setSelected([]);
//     onChange([]);
//   };

//   return (
//     <View className="p-4 bg-gray-100  rounded-lg">
//       <Text className="font-bold mb-2">Subcategories</Text>

//       {/* Dropdown header */}
//       <TouchableOpacity
//         onPress={() => setDropdownOpen(!dropdownOpen)}
//         className="border border-gray-300  px-4 py-2 flex-row items-center justify-between"
//       >
//         <View className="flex-row flex-wrap">
//           {selected.length > 0 ? (
//             selected.map((subCat) => (
//               <View
//                 key={subCat}
//                 className="flex-row items-center bg-blue-500 rounded-full px-3 py-1 m-1"
//               >
//                 <Text className="text-sm text-white mr-1">{subCat}</Text>
//                 <TouchableOpacity onPress={() => removeItem(subCat)}>
//                   <Text className="text-white font-bold">×</Text>
//                 </TouchableOpacity>
//               </View>
//             ))
//           ) : (
//             <Text className="text-gray-500">Select subcategories</Text>
//           )}
//         </View>
//         <Text className="-ml-10 ">{dropdownOpen ? '▲' : '▼'}</Text>
//       </TouchableOpacity>

//       {/* Dropdown content */}
//       {dropdownOpen && (
//         <View className="mt-2 border border-gray-300 rounded p-2">
//           <ScrollView style={{ maxHeight: 200 }}>
//             {subCategories.map((subCat) => (
//               <TouchableOpacity
//                 key={subCat}
//                 onPress={() => toggleSelection(subCat)}
//                 className="flex-row items-center justify-between py-2 border-b border-gray-200"
//               >
//                 <Text className="text-gray-700">{subCat}</Text>
//                 <View
//                   className={`w-5 h-5 border rounded flex items-center justify-center ${
//                     selected.includes(subCat)
//                       ? 'bg-blue-500 border-blue-500'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   {selected.includes(subCat) && (
//                     <Text className="text-white text-xs">✓</Text>
//                   )}
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//           {selected.length > 0 && (
//             <TouchableOpacity onPress={clearAll} className="mt-2 p-2 bg-red-500 rounded">
//               <Text className="text-white text-center">Clear All</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       )}
//     </View>
//   );
// };

// export default SubCategoryFilter;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

type SubCategoryFilterProps = {
  subCategories: string[];
  onChange: (selected: string[]) => void;
};

const SubCategoryFilter: React.FC<SubCategoryFilterProps> = ({ subCategories, onChange }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleSelection = (subCat: string) => {
    let newSelected: string[];
    if (selected.includes(subCat)) {
      newSelected = selected.filter((item) => item !== subCat);
    } else {
      newSelected = [...selected, subCat];
    }
    setSelected(newSelected);
    onChange(newSelected);
  };

  const removeItem = (subCat: string) => {
    const newSelected = selected.filter((item) => item !== subCat);
    setSelected(newSelected);
    onChange(newSelected);
  };

  const clearAll = () => {
    setSelected([]);
    onChange([]);
  };

  return (
    <View className="p-4 bg-gray-100 rounded-lg">
      <Text className="font-bold mb-2">Subcategories</Text>

      {/* Dropdown Header */}
      <TouchableOpacity
        onPress={() => setDropdownOpen(!dropdownOpen)}
        className="border border-gray-300 px-4 py-2 flex-row items-center justify-between"
      >
        <View className="flex-row flex-wrap">
          {selected.length > 0 ? (
            selected.map((subCat) => (
              <View
                key={subCat}
                className="flex-row items-center bg-blue-500 rounded-full px-3 py-1 m-1"
              >
                <Text className="text-sm text-white mr-1">{subCat}</Text>
                <TouchableOpacity onPress={() => removeItem(subCat)}>
                  <Text className="text-white font-bold">×</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text className="text-gray-500">Select subcategories</Text>
          )}
        </View>
        <Text className="-ml-10">{dropdownOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {/* Dropdown Content */}
      {dropdownOpen && (
        <View className="mt-2 border border-gray-300 rounded p-2">
          <ScrollView style={{ maxHeight: 200 }}>
            {subCategories.map((subCat) => (
              <TouchableOpacity
                key={subCat}
                onPress={() => toggleSelection(subCat)}
                className="flex-row items-center justify-between py-2 border-b border-gray-200"
              >
                <Text className="text-gray-700">{subCat}</Text>
                <View
                  className={`w-5 h-5 border rounded flex items-center justify-center ${
                    selected.includes(subCat)
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  {selected.includes(subCat) && (
                    <Text className="text-white text-xs">✓</Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {selected.length > 0 && (
            <TouchableOpacity onPress={clearAll} className="mt-2 p-2 bg-red-500 rounded">
              <Text className="text-white text-center">Clear All</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default SubCategoryFilter;