/** @jsxImportSource @emotion/react */

import { useContext, useState } from 'react';
import { ThemeContext, styles, toRem } from '../theme';
import SidebarArrow from './SidebarArrow';
import DarkModeToggle from "react-dark-mode-toggle";
import { useLocation } from 'react-router-dom';
import Link from './Link';
import StickyBox from "react-sticky-box";

const topics = [
  ['Home', ''],
  ['Syllabus', 'syllabus'],
  ['About', 'about'],
  ['Stories by algorithms', 'by-algorithms', [
    ['Introduction', 'introduction'],
    ['Examples', 'examples'],
  ]],
  ['Stories through algorithms', 'through-algorithms', [
    ['Introduction', 'introduction'],
    ['Examples', 'examples'],
  ]],
  ['Stories about algorithms', 'about-algorithms', [
    ['Introduction', 'introduction'],
    ['Examples', 'examples'],
  ]],
];

const sidebarItemHeight = toRem(38);

const sidebarItem = {
  ...styles.tableMiddleInline,
  fontSize: styles.fontSizes.sidebarLinks,
  height: sidebarItemHeight,
  padding: `0 ${toRem(8)}`,
  width: toRem(230),
  borderRadius: toRem(3),
  userSelect: 'none'
};
const sidebarSide = {
  ...styles.tableMiddleInline,
  height: sidebarItemHeight,
  width: toRem(31)
}

export default function Sidebar() {
  const { theme, darkMode, setDarkMode, sidebarExpanded } = useContext(ThemeContext);
  const [expandedStates, setExpandedStates] = useState({});

  const sidebarSideNested = {
    borderLeft: `solid ${toRem(1.5)} ${theme.colors.fadedGray}`,
    transform: `translateX(${toRem(7.5)})`
  };

  const location = useLocation();

  const currentRoute = location.pathname.substring(1);
  const currentFolder = currentRoute.split('/')[0];

  return (
    <StickyBox offsetTop={100} offsetBottom={50} css={{
      ...styles.inlineTop,
      marginLeft: 0,
      transform: `translateX(0)`,
      transition: `margin-left ${styles.transitions.sidebar}, transform ${styles.transitions.sidebar}`,
      [styles.breaks.tablet]: {
        marginLeft: styles.retractedSidebarWidth,
        transform: `translateX(${sidebarExpanded ? styles.sidebarWidth : 0})`,
      },
    }}>
      <div css={{
        padding: `0 ${toRem(24)}`,
        width: styles.sidebarWidth,
        boxSizing: 'border-box',
      }}>
        <div>
          {
            topics.map(topic => {
              const topicUrl = '/' + topic[1];
              const expanded = topic[1] === currentFolder || expandedStates[topicUrl];
              const topLevelSelected = topic[1] === currentFolder;
              const topicSelected = topic[1] === currentRoute;
              return (
                // Top-level item
                <div css={{ ...styles.tableRow }} key={topicUrl}>
                  <div>
                    <span css={{ ...sidebarSide }}>
                      {topic[2] != null ? <SidebarArrow expanded={expanded} clickable={!topLevelSelected} onClick={() => setExpandedStates({ ...expandedStates, [topicUrl]: !expandedStates[topicUrl] })} /> : null}
                    </span>
                    <Link to={topicUrl} css={{
                      ...sidebarItem,
                      color: topLevelSelected || topicSelected ? (topicSelected ? theme.colors.sidebarSelectedFg : theme.colors.sidebarTopLevelFg) : theme.colors.darkGray,
                      background: topicSelected ? theme.colors.sidebarSelectedBg : null
                    }}>{topic[0]}</Link>
                  </div>
                  {
                    topic[2] != null && expanded ? topic[2].map((subtopic, i) => {
                      const selected = [topic[1], subtopic[1]].join('/') === currentRoute;
                      const isLast = i === topic[2].length - 1;
                      const url = '/' + [topic[1], subtopic[1]].join('/');
                      return (
                        // Lower-level item
                        <div key={url}>
                          <span css={{ ...sidebarSide, ...sidebarSideNested, ...(isLast ? { transform: sidebarSideNested.transform + ' scaleY(0.7) translateY(-9px)' } : {}) }}></span>
                          <Link to={url} css={{
                            ...sidebarItem,
                            color: selected ? theme.colors.sidebarSelectedFg : theme.colors.darkGray,
                            background: selected ? theme.colors.sidebarSelectedBg : null
                          }}>{subtopic[0]}</Link>
                        </div>
                      );
                    }) : null
                  }
                </div>
              )
            })
          }
          <div css={{ ...styles.tableRow }}>
            <span css={{ ...sidebarSide, height: toRem(25) }}></span>
          </div>
          <div css={{ ...styles.tableRow }}>
            <div>
              <span css={{ ...sidebarSide, paddingTop: toRem(20) }} />
              <span css={{
                ...sidebarItem,
                borderRadius: 0,
                borderTop: `solid ${toRem(1.5)} ${theme.colors.imperceptibleGray}`,
                color: theme.colors.darkGray,
              }}>Theme: <DarkModeToggle
                  onChange={setDarkMode}
                  checked={darkMode}
                  size={toRem(45 * (1 / 0.9))}
                  css={{
                    ...styles.middleInline, marginLeft: toRem(5), div: {
                      transform: 'scale(0.9)'
                    }
                  }}
                /></span>
            </div>
          </div >
        </div>
      </div>
    </StickyBox>
  )
}
