import React, { useState } from "react";

const ContextTheme = React.createContext();

const ProviderTheme = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState({
    align: "center",
    font: 20,
  });

  const increaseFont = () => {
    setTheme({ ...theme, font: theme.font + 1 });
  };

  const decreaseFont = () => {
    setTheme({ ...theme, font: theme.font > 0 ? theme.font - 1 : theme.font });
  };

  const alignText = (orientation) => {
    setTheme({ ...theme, align: orientation });
  };

  return (
    <ContextTheme.Provider
      value={{ theme, increaseFont, decreaseFont, alignText }}
    >
      {children}
    </ContextTheme.Provider>
  );
};

export { ContextTheme, ProviderTheme };
