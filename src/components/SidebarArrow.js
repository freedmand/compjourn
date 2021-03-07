/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { styles, ThemeContext, toRem } from '../theme';

export default function SidebarArrow({ expanded = false, onClick = () => { }, clickable = true }) {
  const { theme } = useContext(ThemeContext);
  const arrowSize = toRem(17);

  if (expanded) {
    return (
      <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none" css={{ display: 'inline-block', transform: `translateY(${toRem(-4)})`, width: arrowSize, height: arrowSize, ...(clickable ? styles.buttonLike : {}) }}>
        <path
          fill={theme.colors.dropdownGray}
          fillRule="evenodd"
          d="M8.5 17l8.3-8.3L15 7l-6.6 6.7L1.8 7 .2 8.7 8.5 17z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  } else {
    return (
      <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none" css={{ display: 'inline-block', marginLeft: toRem(-4), width: arrowSize, height: arrowSize, ...(clickable ? styles.buttonLike : {}) }}>
        <path
          fill={theme.colors.dropdownGray}
          fillRule="evenodd"
          d="M16.8 8.6L8.5.3 6.8 2l6.7 6.6-6.7 6.7 1.7 1.6 8.3-8.3z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }
}
