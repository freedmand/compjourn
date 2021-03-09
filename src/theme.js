import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const THEME_FG = '#29359B';
const DARK_BG = '#282b2f';

export const toRem = px => `${px / 16}rem`;

export const styles = {
  middleInline: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  inlineTop: {
    display: 'inline-block',
    verticalAlign: 'top',
  },
  pane: {
    position: 'absolute',
    bottom: 0,
    overflowY: 'auto',
    overflowX: 'hidden',
    top: 0,
    '> *': {
      marginTop: toRem(74)
    },
    zIndex: -1
  },
  tableMiddleInline: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  tableRow: {
    display: 'table-row',
  },
  breaks: {
    tablet: '@media (max-width: 768px)',
    mobile: '@media (max-width: 400px)',
  },
  transitions: {
    sidebar: '0.3s ease',
  },
  sidebarWidth: toRem(380),
  retractedSidebarWidth: toRem(-380),
  lineHeight: 1.5,
  fontSizes: {
    logo: toRem(22),
    logoSmall: toRem(20),
    headerLinks: toRem(18),
    sidebarLinks: toRem(19),
    h1: toRem(51),
    h2: toRem(32),
    h3: toRem(26),
    h4: toRem(20),
    bodyBigger: toRem(20),
    body: toRem(18),
    blockQuote: toRem(28),
    attribution: toRem(18),
  },
  buttonLike: {
    cursor: 'pointer',
    userSelect: 'none',
    '&:hover': {
      opacity: 0.8
    }
  }
}

export function getTheme(darkMode) {
  const colorIndex = darkMode ? 1 : 0;
  return {
    colors: {
      background: ['white', DARK_BG][colorIndex],
      theme: [THEME_FG, '#ADB5FF'][colorIndex],
      themeFaded: ['#A0A8F3', '#6F75A8'][colorIndex],
      sidebarSelectedBg: ['#EEF0FF', '#ADB5FF'][colorIndex],
      sidebarTopLevelFg: [THEME_FG, '#ECECEC'][colorIndex],
      sidebarSelectedFg: [THEME_FG, DARK_BG][colorIndex],
      body: ['#2E2E2E', '#ECECEC'][colorIndex],
      orange: ['#DE5F17', '#FFB489'][colorIndex],
      green: ['#299B35', '#B6FFBD'][colorIndex],
      blue: ['#1368CC', '#9BDBFF'][colorIndex],
      darkGray: ['#484848', 'white'][colorIndex],
      dropdownGray: ['#787878', '#AEAEAE'][colorIndex],
      fadedGray: ['#C2C2C2', '#828282'][colorIndex],
      imperceptibleGray: ['#eaeaea', '#4e4d4d'][colorIndex],
      black: ['black', 'white'][colorIndex]
    }
  }
}

export const ThemeContext = React.createContext({
  theme: { colors: {} },
  setDarkMode: () => { },
  setSidebarExpanded: () => { }
});


export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkmode', false);  // default to light mode
  const [sidebarExpanded, setSidebarExpanded] = React.useState(false);
  const theme = getTheme(darkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebarExpanded = () => setSidebarExpanded(!sidebarExpanded);

  return (
    <ThemeContext.Provider value={{ theme, darkMode, setDarkMode, toggleDarkMode, sidebarExpanded, setSidebarExpanded, toggleSidebarExpanded }}>
      {children}
    </ ThemeContext.Provider>
  );
};
