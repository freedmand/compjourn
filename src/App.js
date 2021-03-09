/** @jsxImportSource @emotion/react */

import { Global } from '@emotion/react';
import { useContext } from 'react';
import { ThemeContext } from './theme';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';

const fontBreaks = [
  [1350, 15],
  [1200, 14],
  [1100, 13],
  [430, 12],
];
const mediaQueries = {};
fontBreaks.forEach(([maxWidth, fontSize]) => {
  mediaQueries[`@media (max-width: ${maxWidth}px)`] = {
    html: {
      fontSize: `${fontSize / 16}em`
    }
  };
});

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <Global
        styles={{
          'body, html': {
            background: theme.colors.background,
            margin: 0,
            fontFamily: `'Atkinson Hyperlegible', sans-serif`,
            transition: 'background 0.3s ease',
          },
          body: {
            overflowX: 'hidden', // see https://stackoverflow.com/a/54116585
          },
          // '#root': {
          //   overflowX: 'hidden',
          // },
          // '#root': {
          //   overflow: 'hidden',
          //   position: 'fixed',
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          // },
          ...mediaQueries
        }}
      />
      <Header />
      <div css={{ position: 'relative' }}>
        <Sidebar />
        <Body>
          <Switch>
            {routes.map(([path, Component]) => {
              return (
                <Route path={path} key={path}><Component /></Route>
              )
            })}
          </Switch>
        </Body>
      </div>
    </Router>
  );
}
