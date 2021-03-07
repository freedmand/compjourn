/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { styles, ThemeContext, toRem } from '../theme';

export default function Body({ children }) {
  const { sidebarExpanded } = useContext(ThemeContext);

  return (
    <div css={{
      ...styles.pane,
      padding: `${toRem(18)} ${toRem(40)}`,
      left: styles.sidebarWidth,
      right: 0,
      transition: `left ${styles.transitions.sidebar}, transform ${styles.transitions.sidebar}`,
      transform: 'translateX(0)',
      [styles.breaks.tablet]: {
        left: 0,
        transform: sidebarExpanded ? `translateX(${styles.sidebarWidth})` : 'translateX(0)',
      },
    }}>
      <div css={{ maxWidth: toRem(785), paddingBottom: toRem(50) }}>
        {children}
      </div>
    </div >
  )
}
