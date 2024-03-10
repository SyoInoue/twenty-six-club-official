import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

type Props = {
  /** 子要素 */
  children: React.ReactNode
  /** ページのURL */
  location?: Location
}

/**
 * 全てで共通のレイアウトコンポーネント
 */
export default function Layout({ children, location }: Props) {
  let content: React.ReactNode

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="ja" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}
