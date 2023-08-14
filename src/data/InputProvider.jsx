import { createContext, useState } from "react";

const InputTextContext = createContext();

export function InputTextProvider({ children }) {
  const [mainInputText, setInputText] = useState("");

  const [secondaryInputText, setSecondayInputText] = useState(null);

  return (
    <InputTextContext.Provider
      value={{
        mainInputText,
        setInputText,
        secondaryInputText,
        setSecondayInputText,
      }}
    >
      {children}
    </InputTextContext.Provider>
  );
}

export default InputTextContext;
