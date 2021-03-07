/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { ThemeContext, toRem } from '../theme';

export default function SyllabusLogo() {
  const { theme } = useContext(ThemeContext);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 11" css={{ width: toRem(12), height: toRem(11) }} fill="none">
      <rect
        width="11.3"
        height="2.2"
        x="0.4"
        y="0.3"
        fill={theme.colors.orange}
        rx="1.1"
      ></rect>
      <rect
        width="11.3"
        height="2.2"
        x="0.4"
        y="4.5"
        fill={theme.colors.green}
        rx="1.1"
      ></rect>
      <rect
        width="11.3"
        height="2.2"
        x="0.4"
        y="8.7"
        fill={theme.colors.blue}
        rx="1.1"
      ></rect>
    </svg>
  );
}
