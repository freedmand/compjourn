/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { ThemeContext, toRem } from '../theme';

export default function AboutLogo() {
  const { theme } = useContext(ThemeContext);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" css={{ width: toRem(17), height: toRem(16) }} fill="none">
      <path
        stroke={theme.colors.themeFaded}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 5l3 5 5-3"
      ></path>
      <circle
        cx="3.3"
        cy="2.7"
        r="1.9"
        stroke={theme.colors.theme}
        strokeWidth="1.5"
      ></circle>
      <circle
        cx="6.4"
        cy="12.7"
        r="1.9"
        stroke={theme.colors.theme}
        strokeWidth="1.5"
      ></circle>
      <circle
        cx="13.5"
        cy="5.4"
        r="1.9"
        stroke={theme.colors.theme}
        strokeWidth="1.5"
      ></circle>
    </svg>
  );
}
