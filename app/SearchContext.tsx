// // SearchContext.tsx
// import React, { createContext, useState, ReactNode } from 'react';

// interface SearchContextType {
//   query: string;
//   setQuery: (query: string) => void;
// }

// export const SearchContext = createContext<SearchContextType>({
//   query: '',
//   setQuery: () => {},
// });

// export const SearchProvider = ({ children }: { children: ReactNode }) => {
//   const [query, setQuery] = useState('');
//   return (
//     <SearchContext.Provider value={{ query, setQuery }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };


// SearchContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
  query: '',
  setQuery: () => {},
});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState('');
  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
