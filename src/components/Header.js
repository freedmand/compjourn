/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { styles, ThemeContext, toRem } from '../theme';

import Logo from './Logo';
import Hamburger from './Hamburger';
import SyllabusLogo from './SyllabusLogo';
import AboutLogo from './AboutLogo';
import Nav from './Nav';
import Link from './Link';

export default function Header() {
  const { theme, toggleSidebarExpanded } = useContext(ThemeContext);

  const logoSize = toRem(34);

  return (
    <header css={{
      padding: `${toRem(19)} ${toRem(32)}`,
      background: theme.colors.background,
      position: 'sticky',
      top: 0,
      zIndex: 1,
    }}>
      <span onClick={toggleSidebarExpanded} css={{ padding: toRem(16), margin: toRem(-16), marginRight: toRem(25 - 16), display: 'none', [styles.breaks.tablet]: { display: 'inline-block' }, ...styles.buttonLike }}>
        <Hamburger />
      </span>
      <Link to="/">
        <span css={{ ...styles.middleInline, paddingRight: toRem(15) }}>
          <Logo width={logoSize} height={logoSize} />
        </span>
        <h1 css={{ ...styles.middleInline, color: theme.colors.body, paddingRight: toRem(52), margin: 0, fontSize: styles.fontSizes.logo, [styles.breaks.mobile]: { fontSize: styles.fontSizes.logoSmall, paddingRight: 0 } }}>Computational Journalism</h1>
      </Link>
      <nav css={{ ...styles.middleInline, [styles.breaks.tablet]: { display: 'none' } }}>
        <Nav logo={SyllabusLogo} to="/syllabus">Syllabus</Nav>
        <Nav logo={AboutLogo} to="/about">About</Nav>
      </nav>
    </header>
  );
}
