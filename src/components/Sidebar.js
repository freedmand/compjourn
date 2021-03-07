/** @jsxImportSource @emotion/react */

import { useContext, useState } from 'react';
import { ThemeContext, styles, toRem } from '../theme';
import SidebarArrow from './SidebarArrow';
import DarkModeToggle from "react-dark-mode-toggle";
import { Link, useLocation } from 'react-router-dom';

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
  const { theme, darkMode, setDarkMode, sidebarExpanded, setSidebarExpanded } = useContext(ThemeContext);
  const [expandedStates, setExpandedStates] = useState({});

  const sidebarSideNested = {
    borderLeft: `solid ${toRem(1.5)} ${theme.colors.fadedGray}`,
    transform: `translateX(${toRem(7.5)})`
  };

  const location = useLocation();

  const currentRoute = location.pathname.substring(1);
  const currentFolder = currentRoute.split('/')[0];

  return (
    <div css={{
      ...styles.pane,
      left: 0,
      padding: `${toRem(33)} ${toRem(24)}`,
      width: styles.sidebarWidth,
      transition: `left ${styles.transitions.sidebar}`,
      [styles.breaks.tablet]: {
        left: sidebarExpanded ? 0 : styles.retractedSidebarWidth
      },
    }}>
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
                <Link onClick={() => setSidebarExpanded(false)} to={topicUrl} css={{
                  ...sidebarItem,
                  ...styles.buttonLike,
                  textDecoration: 'none',
                  color: topLevelSelected || topicSelected ? theme.colors.theme : theme.colors.darkGray,
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
                      <Link onClick={() => setSidebarExpanded(false)} to={url} css={{
                        ...sidebarItem,
                        ...styles.buttonLike,
                        textDecoration: 'none',
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
  )
}
