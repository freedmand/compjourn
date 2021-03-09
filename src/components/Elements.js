/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { styles, ThemeContext, toRem } from '../theme';

export function Img({ alt, src, banner = false }) {
  const imageMargin = toRem(22);
  const imageBannerMargin = toRem(15);
  return <img css={{ width: '100%', maxWidth: toRem(745), marginLeft: -imageMargin, marginRight: -imageMargin, marginTop: banner ? imageBannerMargin : 0, marginBottom: banner ? imageBannerMargin : 0 }} alt={alt} src={src} />
}

export function BlockQuote({ quote, attribution }) {
  const { theme } = useContext(ThemeContext);

  return (
    <figure css={{ textAlign: 'right', margin: `${toRem(50)} auto` }}>
      <blockquote css={{ color: theme.colors.theme, maxWidth: toRem(500), margin: `0 auto`, padding: 0 }}>
        <p css={{ margin: `0 auto`, fontSize: `${styles.fontSizes.blockQuote} !important`, fontWeight: 'bold' }}>{quote}</p>
      </blockquote>
      <figcaption css={{ color: theme.colors.body, fontSize: styles.fontSizes.attribution, margin: `${toRem(15)} auto`, padding: 0 }}>{attribution}</figcaption>
    </figure>
  )
}
