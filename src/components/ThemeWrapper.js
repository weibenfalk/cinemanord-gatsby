import React, { useState } from 'react';

export const ThemeContext = React.createContext(true);

const ThemeWrapper = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);
  return (
    <ThemeContext.Provider value={[nightMode, setNightMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
