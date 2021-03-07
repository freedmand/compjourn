/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { ThemeContext } from '../theme';

export default function Logo(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      fill="none"
      viewBox="0 0 512 512"
      {...props}
    >
      <circle cx="256" cy="256" r="256" fill={theme.colors.theme}></circle>
      <path
        fill={theme.colors.background}
        d="M195 321c41 0 74-19 92-50l-45-16c-10 18-30 24-46 24-31 0-55-25-55-70 0-44 24-70 54-70 18 0 35 7 45 24l46-16a97 97 0 00-89-50c-67 0-110 43-110 112s41 112 108 112zm110 107c55 0 85-33 85-87V208h-52v133c0 35-12 47-33 47-20 0-31-19-34-38l-47 18c9 36 36 60 81 60z"
      ></path>
    </svg>
  );
}
