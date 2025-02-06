// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import Slider from 'expo-slider';

// type PriceFilterProps = {
//   minPrice: number;
//   maxPrice: number;
//   onChange: (range: { min: number; max: number }) => void;
// };

// const PriceFilter: React.FC<PriceFilterProps> = ({ minPrice, maxPrice, onChange }) => {
//   const [minValue, setMinValue] = useState(minPrice);
//   const [maxValue, setMaxValue] = useState(maxPrice);

//   const handleMinChange = (value: number) => {
//     setMinValue(value);
//     onChange({ min: value, max: maxValue });
//   };

//   const handleMaxChange = (value: number) => {
//     setMaxValue(value);
//     onChange({ min: minValue, max: value });
//   };

//   return (
//     <View className="p-4 bg-gray-100 rounded-lg mt-4">
//       <Text className="font-bold mb-2">Price Range</Text>
//       <Text className="text-sm">Min: ₹{minValue.toFixed(0)}</Text>
//       <Slider
//         value={minValue}
//         onValueChange={handleMinChange}
//         minimumValue={minPrice}
//         maximumValue={maxPrice}
//         step={1}
//         style={{ width: '100%', height: 40 }}
//         minimumTrackTintColor="#1EB1FC"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1EB1FC"
//       />
//       <Text className="text-sm mt-2">Max: ₹{maxValue.toFixed(0)}</Text>
//       <Slider
//         value={maxValue}
//         onValueChange={handleMaxChange}
//         minimumValue={minPrice}
//         maximumValue={maxPrice}
//         step={1}
//         style={{ width: '100%', height: 40 }}
//         minimumTrackTintColor="#1EB1FC"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1EB1FC"
//       />
//     </View>
//   );
// };

// export default PriceFilter;



// import React, { useState } from "react";
// import { View, Text, TextInput, StyleSheet } from "react-native";

// type PriceFilterProps = {
//   minPrice: number;
//   maxPrice: number;
//   onChange: (range: { min: number; max: number }) => void;
// };

// const PriceFilter: React.FC<PriceFilterProps> = ({ minPrice, maxPrice, onChange }) => {
//   const [minValue, setMinValue] = useState(String(minPrice));
//   const [maxValue, setMaxValue] = useState(String(maxPrice));

//   const handleMinChange = (value: string) => {
//     let numValue = parseInt(value) || minPrice;
//     if (numValue < minPrice) numValue = minPrice;
//     if (numValue > maxPrice) numValue = maxPrice;
//     setMinValue(numValue.toString());
//     onChange({ min: numValue, max: parseInt(maxValue) || maxPrice });
//   };

//   const handleMaxChange = (value: string) => {
//     let numValue = parseInt(value) || maxPrice;
//     if (numValue < minPrice) numValue = minPrice;
//     if (numValue > maxPrice) numValue = maxPrice;
//     setMaxValue(numValue.toString());
//     onChange({ min: parseInt(minValue) || minPrice, max: numValue });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Price Range</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.inputLabel}>Min (₹):</Text>
//         <TextInput
//           style={styles.input}
//           keyboardType="numeric"
//           value={minValue}
//           onChangeText={handleMinChange}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.inputLabel}>Max (₹):</Text>
//         <TextInput
//           style={styles.input}
//           keyboardType="numeric"
//           value={maxValue}
//           onChangeText={handleMaxChange}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//     borderRadius: 8,
//     marginTop: 16,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   inputLabel: {
//     fontSize: 14,
//     marginRight: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 8,
//     borderRadius: 5,
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });

// export default PriceFilter;



// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import Slider from '@react-native-community/slider';

// type PriceFilterProps = {
//   minPrice: number;
//   maxPrice: number;
//   onChange: (range: { min: number; max: number }) => void;
// };

// const PriceFilter: React.FC<PriceFilterProps> = ({ minPrice, maxPrice, onChange }) => {
//   const [minValue, setMinValue] = useState(minPrice);
//   const [maxValue, setMaxValue] = useState(maxPrice);

//   const handleMinChange = (value: number) => {
//     setMinValue(value);
//     onChange({ min: value, max: maxValue });
//   };

//   const handleMaxChange = (value: number) => {
//     setMaxValue(value);
//     onChange({ min: minValue, max: value });
//   };

//   return (
//     <View className="p-4 bg-gray-100 rounded-lg mt-4">
//       <Text className="font-bold mb-2">Price Range</Text>
//       <Text className="text-sm">Min: ₹{minValue.toFixed(0)}</Text>
//       <Slider
//         value={minValue}
//         onValueChange={handleMinChange}
//         minimumValue={minPrice}
//         maximumValue={maxPrice}
//         step={1}
//         style={{ width: '100%', height: 40 }}
//         minimumTrackTintColor="#1EB1FC"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1EB1FC"
//       />
//       <Text className="text-sm mt-2">Max: ₹{maxValue.toFixed(0)}</Text>
//       <Slider
//         value={maxValue}
//         onValueChange={handleMaxChange}
//         minimumValue={minPrice}
//         maximumValue={maxPrice}
//         step={1}
//         style={{ width: '100%', height: 40 }}
//         minimumTrackTintColor="#1EB1FC"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1EB1FC"
//       />
//     </View>
//   );
// };

// export default PriceFilter;



// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import Slider from '@react-native-community/slider';

// type PriceFilterProps = {
//   onChange: (value: number) => void;
// };

// const PriceFilter: React.FC<PriceFilterProps> = ({ onChange }) => {
//   const minPrice = 0;
//   const maxPrice = 10000;
//   const [value, setValue] = useState(minPrice);

//   const handleValueChange = (val: number) => {
//     setValue(val);
//     onChange(val);
//   };

//   return (
//     <View style={{ padding: 16, backgroundColor: '#f3f4f6', borderRadius: 8, marginTop: 16 }}>
//       <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Select Price</Text>
//       <Text style={{ fontSize: 14, marginBottom: 8 }}>Selected: ₹{value.toFixed(0)}</Text>
//       <Slider
//         value={value}
//         onValueChange={handleValueChange}
//         minimumValue={minPrice}
//         maximumValue={maxPrice}
//         step={1}
//         style={{ width: '100%', height: 40 }}
//         minimumTrackTintColor="#1EB1FC"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1EB1FC"
//       />
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
//         <Text>₹{minPrice}</Text>
//         <Text>₹{maxPrice}</Text>
//       </View>
//     </View>
//   );
// };

// export default PriceFilter;


import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

type PriceFilterProps = {
  minPrice: number;
  maxPrice: number;
  onChange: (range: { min: number; max: number }) => void;
};

const PriceFilter: React.FC<PriceFilterProps> = ({ minPrice, maxPrice, onChange }) => {
  // Use a single slider to set the maximum price.
  const [selectedMax, setSelectedMax] = useState(maxPrice);

  const handleValueChange = (value: number) => {
    setSelectedMax(value);
    // Here, the range is set from the fixed minimum to the selected maximum.
    onChange({ min: minPrice, max: value });
  };

  return (
    <View style={{ padding: 10, backgroundColor: '#f3f4f6', borderRadius: 8, marginTop: 14 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Price Range</Text>
      <Text style={{ fontSize: 14 }}>Selected Max Price: ₹{selectedMax.toFixed(0)}</Text>
      <Slider
        value={selectedMax}
        onValueChange={handleValueChange}
        minimumValue={minPrice}
        maximumValue={maxPrice}
        step={1}
        style={{ width: '100%', height: 40 }}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#1EB1FC"
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
        <Text>₹{minPrice}</Text>
        <Text>₹{maxPrice}</Text>
      </View>
    </View>
  );
};

export default PriceFilter;