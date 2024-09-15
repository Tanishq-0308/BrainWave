import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [country, setCountry] = useState("");
  const [exlayer, setExLayer] = useState("");

  return (
    <SearchContext.Provider
      value={{ country, setCountry, exlayer, setExLayer }}
    >
      {children}
    </SearchContext.Provider>
  );
};
