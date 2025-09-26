import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext('halloween');

const allowedThemes = ['halloween', 'retro', 'cyberpunk', 'dim', 'abyss'];

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('halloween');

  function changeTheme(newTheme) {
    if (allowedThemes.includes(newTheme)) setTheme(newTheme);
  }

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
