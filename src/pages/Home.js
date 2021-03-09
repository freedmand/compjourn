/** @jsxImportSource @emotion/react */

import BannerPng from '../images/banner.png';
import { Img, BlockQuote } from '../components/Elements';
import { ThemeContext, toRem, styles } from '../theme';
import { useContext } from 'react';

const mobileBlock = { [styles.breaks.mobile]: { margin: `${toRem(40)} 0`, display: 'block', width: '100%', 'br': { content: "' '" }, 'h2': { marginBottom: toRem(0) }, 'p': { margin: `${toRem(16)} 0` } } };

function Column({ word, color, blurb, examples }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div css={{ display: 'table-cell', width: '33%', padding: `0 ${toRem(20)}`, color: theme.colors.body, fontSize: styles.fontSizes.bodySmaller, ...mobileBlock }}>
      <h3 css={{ marginBottom: toRem(10) }}>Stories <br /><span css={{ color }}>{word}</span> <br />algorithms</h3>
      <p css={{ lineHeight: `1.3 !important` }}>{blurb}</p>
      <p css={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: `${toRem(14)} !important` }}>Examples</p>
      {examples.map((example, i) => (
        <p key={i} css={{ lineHeight: `1.3 !important`, [styles.breaks.mobile]: { margin: `${toRem(8)} 0 !important` } }}>{example}</p>
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
      <h1 css={{ marginTop: toRem(20) }}><span css={{ color: theme.colors.black }}>Welcome to</span><br /><span css={{ color: theme.colors.theme }}>computational journalism</span></h1>
      <Img banner={true} alt="Mosaic of data visualizations" src={BannerPng} width={1503} height={526} />
      <p css={{ fontSize: `${styles.fontSizes.bodyBigger} !important` }}>Welcome! This is an envisioned course curriculum for Computational Journalism. The course is divided into three units — stories <i>by</i> algorithms, stories <i>through</i> algorithms, and stories <i>about</i> algorithms — highlighting the different ways journalism and computation intersect. The focus will be on practical toolbuilding and reporting, including learning how to construct applicable tools to facilitate story discovery and generation and deconstruct the algorithms that govern daily life.</p>
      <BlockQuote quote="“Computational journalism is stories by, through, and about algorithms”" attribution="— Stanford Journalism Program Director James T. Hamilton" />
      <p>What does it mean to think of computational journalism in this way? Let’s break it down:</p>
      <Breakdown>
        <Column word="by" color={theme.colors.orange} blurb="Using algorithms to write stories" examples={[
          "Automatically generated sports/finance stories",
          "Reusable story templates for local news stories",
          "News curation through a news aggregator app"
        ]} />
        <Column word="through" color={theme.colors.green} blurb="Using algorithms to discover and tell stories" examples={[
          "Tools and frameworks for sifting through datasets, document collections, and databases",
          "Platforms to facilitate local news creation",
          "Machine learning to reduce investigative workload",
        ]} />
        <Column word="about" color={theme.colors.blue} blurb="Writing stories to cover algorithms" examples={[
          "Examining machine bias in credit scores, automated sentencing decisions, etc.",
          "Analyzing social media’s influence in spreading misinformation",
          "Breaking down bias in search engine results"
        ]} />
      </Breakdown>
    </>
  )
}
