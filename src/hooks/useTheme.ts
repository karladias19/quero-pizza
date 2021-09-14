import { useContext, createContext, Context } from 'react';
import { ThemeContext, DefaultTheme } from 'styled-components';

const themeContext = createContext<Context<DefaultTheme>>(ThemeContext);

export const useTheme = () => useContext(themeContext);
