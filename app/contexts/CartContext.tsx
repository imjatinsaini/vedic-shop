// // contexts/CartContext.tsx
// import { Product } from '@/components/HomePageComponents/types';
// import React, { createContext, useContext, useState, ReactNode } from 'react';

// export interface CartItem extends Product {
//   quantity: number;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addItem: (item: Product, quantity?: number) => void;
//   removeItem: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addItem = (item: Product, quantity: number = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((cartItem) => cartItem.id === item.id);
//       if (existing) {
//         return prev.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + quantity }
//             : cartItem
//         );
//       } else {
//         return [...prev, { ...item, quantity }];
//       }
//     });
//   };

//   const removeItem = (id: string) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id: string, quantity: number) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider value={{ cartItems, addItem, removeItem, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };


// contexts/CartContext.tsx
import { EcomProductProps } from '@/components/EcomComponents/ecomproduct';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem extends EcomProductProps {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: EcomProductProps, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: EcomProductProps, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem._id === item._id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
