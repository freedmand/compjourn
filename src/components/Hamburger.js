/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { ThemeContext, toRem } from '../theme';

export default function Hamburger() {
  const { theme } = useContext(ThemeContext);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" fill="none" css={{ width: toRem(20), height: toRem(15) }}>
      <rect
        width="18.8"
        height="2.8"
        x="0.6"
        y="0.6"
        fill={theme.colors.body}
        rx="1.2"
      ></rect>
      <rect
        width="18.8"
        height="2.8"
        x="0.6"
        y="6"
        fill={theme.colors.body}
        rx="1.2"
      ></rect>
      <rect
        width="18.8"
        height="2.8"
        x="0.6"
        y="11.4"
        fill={theme.colors.body}
        rx="1.2"
      ></rect>
    </svg>
  );
}
