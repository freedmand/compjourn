/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { styles, ThemeContext, toRem } from '../theme';

export default function Body({ children }) {
  const { sidebarExpanded, theme } = useContext(ThemeContext);

  return (
    <div css={{
      ...styles.inlineTop,
      padding: `${toRem(18)} ${toRem(40)}`,
      maxWidth: `calc(100% - ${styles.sidebarWidth})`,
      transition: `max-width ${styles.transitions.sidebar}, transform ${styles.transitions.sidebar}`,
      transform: 'translateX(0)',
      color: theme.colors.body,
      fontSize: styles.fontSizes.bodySmaller,
      [styles.breaks.tablet]: {
        transform: sidebarExpanded ? `translateX(${styles.sidebarWidth})` : 'translateX(0)',
        maxWidth: '100%',
      },
      boxSizing: 'border-box',
      // Elements
      h1: {
        fontSize: styles.fontSizes.h1,
      },
      h2: {
        fontSize: styles.fontSizes.h2,
      },
      h3: {
        fontSize: styles.fontSizes.h3,
      },
      h4: {
        fontSize: styles.fontSizes.h4,
      },
      p: {
        fontSize: styles.fontSizes.body,
        lineHeight: styles.lineHeight,
      },
      li: {
        fontSize: styles.fontSizes.body,
        lineHeight: styles.lineHeight,
      }
    }}>
      <div css={{ maxWidth: toRem(785), paddingBottom: toRem(50) }}>
        {children}
      </div>
    </div >
  )
}
