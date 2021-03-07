/** @jsxImportSource @emotion/react */

import BannerPng from '../images/banner.png';
import { H1, Img, P, BlockQuote } from '../components/Elements';
import { ThemeContext, toRem, styles } from '../theme';
import { useContext } from 'react';

const mobileBlock = { [styles.breaks.mobile]: { margin: `${toRem(40)} 0`, display: 'block', width: '100%', 'br': { content: "' '" }, 'h2': { marginBottom: toRem(0) }, 'p': { margin: `${toRem(16)} 0` } } };

function Column({ word, color, blurb, examples }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div css={{ display: 'table-cell', width: '33%', padding: `0 ${toRem(20)}`, color: theme.colors.body, fontSize: styles.fontSizes.bodySmaller, ...mobileBlock }}>
      <h2 css={{ fontSize: styles.fontSizes.h2 }}>Stories <br /><span css={{ color }}>{word}</span> <br />algorithms</h2>
      <p>{blurb}</p>
      <p css={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: toRem(14) }}>Examples</p>
      {examples.map((example, i) => (
        <p key={i} css={{ [styles.breaks.mobile]: { margin: `${toRem(8)} 0 !important` } }}>{example}</p>
      ))}
    </div>
  )
}

function Breakdown({ children }) {
  return (
    <div css={{ display: 'table', tableLayout: 'fixed', width: '100%', ...mobileBlock }}>
      <div css={{ display: 'table-row', ...mobileBlock }}>
        {children}
      </div>
    </div>
  )
}

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <H1><span css={{ color: theme.colors.black }}>Welcome to</span><br /><span css={{ color: theme.colors.theme }}>computational journalism</span></H1>
      <Img banner={true} alt="Mosaic of data visualizations" src={BannerPng} />
      <P><b>Welcome!</b> This is an envisioned course curriculum for Computational Journalism. The course is divided into three units — stories <i>by</i> algorithms, stories <i>through</i> algorithms, and stories <i>about</i> algorithms — highlighting the different ways journalism and computation intersect. The focus will be on practical toolbuilding and reporting, including learning how to construct applicable tools to facilitate story discovery and generation and deconstruct the algorithms that govern daily life.</P>
      <BlockQuote quote="“Computational journalism is stories by, through, and about algorithms”" attribution="— Stanford Journalism Program Director James T. Hamilton" />
      <P>What does it mean to think of computational journalism in this way? Let’s break it down:</P>
      <Breakdown>
        <Column word="by" color={theme.colors.orange} blurb="Using algorithms to write stories" examples={[
          "Automatically generated sports/finance stories",
          "Reusable story templates for local news stories",
        ]} />
        <Column word="through" color={theme.colors.green} blurb="Using algorithms to discover and tell stories" examples={[
          "Tools and frameworks for sifting through big data",
          "Document and entity analysis",
          "Machine learning to reduce investigative workload",
        ]} />
        <Column word="about" color={theme.colors.blue} blurb="Writing stories to cover algorithms" examples={[
          "Examining machine bias in credit scores, automated sentencing decisions, etc.",
          "Analyzing social media’s influence in spreading misinformation",
        ]} />
      </Breakdown>
    </>
  )
}
