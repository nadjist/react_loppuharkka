import { createContext, useState } from "react";

const AppContext = createContext([{}, () => {}]);

const AppProvider = ({ children }) => {

  const [state, setState] = useState({
    quotes: [],
    wordcount: "",
    filteredQuotes: [],
    countFetch: 0,
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
