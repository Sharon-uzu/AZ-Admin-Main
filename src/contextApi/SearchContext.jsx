import React, { useState,createContext, useContext } from 'react';


export const SearchContext = createContext();
export  default function SearchProvider({ children }){
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);