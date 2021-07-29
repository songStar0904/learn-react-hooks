import React, { useContext, createContext, useState, useCallback } from 'react';

const LIGHT = 'light',
  DARK = 'dark';

type themeType = typeof LIGHT | typeof LIGHT;
const themes = {
  [LIGHT]: {
    color: '#000',
    background: '#eee',
  },
  [DARK]: {
    color: '#fff',
    background: '#222',
  },
};

const ThemeContext = createContext({
  theme: themes[LIGHT],
  toggleTheme: () => {},
});

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button style={theme} onClick={toggleTheme}>
        I am styled by theme context!
      </button>
    </>
  );
};
const Toolbar: React.FC = () => {
  return <ThemeButton></ThemeButton>;
};
const Demo3: React.FC = () => {
  const [theme, setTheme] = useState(LIGHT);
  const toggleTheme = useCallback(() => {
    setTheme(theme => (theme === LIGHT ? DARK : LIGHT));
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme: themes[theme as themeType], toggleTheme }}
    >
      <Toolbar></Toolbar>
    </ThemeContext.Provider>
  );
};

export default Demo3;
