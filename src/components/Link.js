/** @jsxImportSource @emotion/react */

import { Link as RouterLink } from 'react-router-dom';
import { ThemeContext, styles } from '../theme';
import { useContext } from 'react';

export default function Link(props) {
  const { setSidebarExpanded } = useContext(ThemeContext);

  const existingCss = props.css || {};
  return <RouterLink {...props} onClick={() => setSidebarExpanded(false)} css={{ ...styles.buttonLike, textDecoration: 'none', ...existingCss }}> {props.children}</RouterLink >
}
