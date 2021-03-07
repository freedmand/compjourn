/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { ThemeContext, styles, toRem } from '../theme';
import Link from './Link';

export default function Nav({ logo: Logo, children, to }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={to} css={{ ...styles.middleInline, padding: `0 ${toRem(39)}` }}>
      <span css={{ ...styles.middleInline, paddingRight: toRem(7) }}>
        {<Logo />}
      </span>
      <span css={{ color: theme.colors.body, fontSize: styles.fontSizes.headerLinks, ...styles.middleInline }}>{children}</span>
    </Link>
  )
}
