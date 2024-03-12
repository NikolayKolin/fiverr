import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  // State that we need in other component
  const [slideBegOrNot, handleSlideBtyState] = useState({
    isFirst: true,
    isLast: false,
  });

  return (
    <ThemeContext.Provider
      value={{
        slideBegOrNot,
        handleSlideBtyState,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
