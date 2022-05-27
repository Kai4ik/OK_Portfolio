import React, { useState, createContext } from "react";

// Create Context Object
export const AppContext = createContext("");

// Create a provider for components to consume and subscribe to changes
export const ContextProvider = (props) => {
  const [currentLocation, setCurrentLocation] = useState("/");
  const [previousLocation, setPreviousLocation] = useState("/");

  return (
    <AppContext.Provider
      value={[
        currentLocation,
        setCurrentLocation,
        previousLocation,
        setPreviousLocation,
      ]}
    >
      {props.children}
    </AppContext.Provider>
  );
};
