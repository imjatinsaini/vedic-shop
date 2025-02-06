// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// export type SortOption = 'newest' | 'lowToHigh' | 'highToLow' | 'discounted';

// type SortByFilterProps = {
//   onChange: (option: SortOption) => void;
// };

// const SortByFilter: React.FC<SortByFilterProps> = ({ onChange }) => {
//   const [selected, setSelected] = useState<SortOption>('newest');

//   const options: { label: string; value: SortOption }[] = [
//     { label: 'Newest First', value: 'newest' },
//     { label: 'Low to High', value: 'lowToHigh' },
//     { label: 'High to Low', value: 'highToLow' },
//     { label: 'Discounted Product', value: 'discounted' },
//   ];

//   const handleSelect = (option: SortOption) => {
//     setSelected(option);
//     onChange(option);
//   };

//   return (
//     <View className="p-4 bg-gray-100 rounded-lg mt-4">
//       <Text className="font-bold mb-2">Sort By</Text>
//       <View className="flex-row flex-wrap">
//         {options.map((option) => (
//           <TouchableOpacity
//             key={option.value}
//             onPress={() => handleSelect(option.value)}
//             className={`border rounded-full px-3 py-1 m-1 ${
//               selected === option.value ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'
//             }`}
//           >
//             <Text className={`text-sm ${selected === option.value ? 'text-white' : 'text-gray-700'}`}>
//               {option.label}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default SortByFilter;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// export type SortOption = 'newest' | 'lowToHigh' | 'highToLow' | 'discounted';

// type SortByFilterProps = {
//   onChange: (option: SortOption) => void;
// };

// const SortByFilter: React.FC<SortByFilterProps> = ({ onChange }) => {
//   const [selected, setSelected] = useState<SortOption>('newest');
//   const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

//   const options: { label: string; value: SortOption }[] = [
//     { label: 'Newest First', value: 'newest' },
//     { label: 'Low to High', value: 'lowToHigh' },
//     { label: 'High to Low', value: 'highToLow' },
//     { label: 'Discounted Product', value: 'discounted' },
//   ];

//   const handleSelect = (option: SortOption) => {
//     setSelected(option);
//     onChange(option);
//     setDropdownOpen(false);
//   };

//   return (
//     <View className="p-4 bg-gray-100 rounded-lg mt-4">
//       <Text className="font-bold mb-2">Sort By</Text>

//       {/* Dropdown Header */}
//       <TouchableOpacity
//         onPress={() => setDropdownOpen(!dropdownOpen)}
//         className="border border-gray-300 rounded p-3 flex-row items-center justify-between bg-white"
//       >
//         <Text className="text-gray-700">
//           {options.find((opt) => opt.value === selected)?.label}
//         </Text>
//         <Text className="text-gray-700">{dropdownOpen ? '▲' : '▼'}</Text>
//       </TouchableOpacity>

//       {/* Dropdown Menu */}
//       {dropdownOpen && (
//         <View className="mt-2 border border-gray-300 rounded bg-white shadow">
//           <ScrollView style={{ maxHeight: 200 }}>
//             {options.map((option) => (
//               <TouchableOpacity
//                 key={option.value}
//                 onPress={() => handleSelect(option.value)}
//                 className="px-4 py-3 border-b last:border-b-0 border-gray-200"
//               >
//                 <Text
//                   className={`text-gray-700 ${
//                     selected === option.value ? 'font-bold' : 'font-normal'
//                   }`}
//                 >
//                   {option.label}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>
//       )}
//     </View>
//   );
// };

// export default SortByFilter;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export type SortOption = 'newest' | 'lowToHigh' | 'highToLow' | 'discounted';

type SortByFilterProps = {
  onChange: (option: SortOption) => void;
};

const SortByFilter: React.FC<SortByFilterProps> = ({ onChange }) => {
  const [selected, setSelected] = useState<SortOption>('newest');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const options: { label: string; value: SortOption }[] = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Low to High', value: 'lowToHigh' },
    { label: 'High to Low', value: 'highToLow' },
    { label: 'Discounted Product', value: 'discounted' },
  ];

  const handleSelect = (option: SortOption) => {
    setSelected(option);
    onChange(option);
    setDropdownOpen(false);
  };

  return (
    <View className="p-4 bg-gray-100 rounded-lg mt-4">
      <Text className="font-bold mb-2">Sort By</Text>

      {/* Dropdown Header */}
      <TouchableOpacity
        onPress={() => setDropdownOpen(!dropdownOpen)}
        className="border border-gray-300 rounded p-3 flex-row items-center justify-between bg-white"
      >
        <Text className="text-gray-700">
          {options.find((opt) => opt.value === selected)?.label}
        </Text>
        <Text className="text-gray-700">{dropdownOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <View className="mt-2 border border-gray-300 rounded bg-white shadow">
          <ScrollView style={{ maxHeight: 200 }}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => handleSelect(option.value)}
                className="px-4 py-3 border-b last:border-b-0 border-gray-200"
              >
                <Text
                  className={`text-gray-700 ${
                    selected === option.value ? 'font-bold' : 'font-normal'
                  }`}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default SortByFilter;