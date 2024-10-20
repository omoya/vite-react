import { createContext, useState } from "react";

export const GlobalState = createContext();

const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({ wiseSentence: "aa" });

  return (
    <GlobalState.Provider value={[state, setState]}>
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalStateProvider;
