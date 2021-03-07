/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { styles, ThemeContext, toRem } from '../theme';

import Logo from './Logo';
import Hamburger from './Hamburger';
import SyllabusLogo from './SyllabusLogo';
import AboutLogo from './AboutLogo';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default function Header() {
  const { theme, toggleSidebarExpanded } = useContext(ThemeContext);

  const logoSize = toRem(34);

  return (
    <header css={{ padding: `${toRem(19)} ${toRem(32)}` }}>
      <span onClick={toggleSidebarExpanded} css={{ marginRight: toRem(25), display: 'none', [styles.breaks.tablet]: { display: 'inline-block' }, ...styles.buttonLike }}>
        <Hamburger />
      </span>
      <Link to="/" css={{ ...styles.buttonLike }}>
        <span css={{ ...styles.middleInline, paddingRight: toRem(15) }}>
          <Logo width={logoSize} height={logoSize} />
        </span>
        <h1 css={{ ...styles.middleInline, color: theme.colors.body, paddingRight: toRem(52), margin: 0, fontSize: styles.fontSizes.logo }}>Computational Journalism</h1>
      </Link>
      <nav css={{ ...styles.middleInline, [styles.breaks.tablet]: { display: 'none' } }}>
        <Nav logo={SyllabusLogo} to="/syllabus">Syllabus</Nav>
        <Nav logo={AboutLogo} to="/about">About</Nav>
      </nav>
    </header>
  );
}
