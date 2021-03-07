/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, styles, toRem } from '../theme';

export default function Nav({ logo: Logo, children, to }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={to} css={{ ...styles.middleInline, padding: `0 ${toRem(39)}`, ...styles.buttonLike }}>
      <span css={{ ...styles.middleInline, paddingRight: toRem(7) }}>
        {<Logo />}
      </span>
      <span css={{ color: theme.colors.body, fontSize: styles.fontSizes.headerLinks, ...styles.middleInline }}>{children}</span>
    </Link>
  )
}
