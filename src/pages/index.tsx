import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import Seo from '../components/Seo'

type Props = {
  /** ページのURL */
  location: Location
}

/**
 * メタ情報の付与
 */
export const Head = () => <Seo />

/**
 * メインページ
 */
export default function IndexPage({ location }: Props) {
  /** 各コンテンツの表示状態 */
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  /** 各コンテンツが消える時の遅延 */
  const [timeoutState, setTimeoutState] = useState(false)
  /** 記事のタイムアウト状態 */
  const [articleTimeout, setArticleTimeout] = useState(false)
  /** 各コンテンツ名を格納するstate */
  const [article, setArticle] = useState('')
  /** ローディング状態格納 */
  const [loading, setLoading] = useState('is-loading')
  /** refでコンテンツを監視 */
  const wrapperRef = useRef<HTMLDivElement>(null)

  /**
   * 各コンテンツを開く時のイベントハンドラ
   * @param article 各コンテンツ名
   */
  const handleOpenArticle = (article: string) => {
    setIsArticleVisible(!isArticleVisible)

    setTimeout(() => {
      setTimeoutState(!timeoutState)
    }, 325)

    setTimeout(() => {
      setArticleTimeout(!articleTimeout)
    }, 350)

    setArticle(article)
  }

  /**
   * 各コンテンツを閉じる時のイベントハンドラ
   */
  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout)

    setTimeout(() => {
      setTimeoutState(!timeoutState)
    }, 325)

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible)
      setArticle('')
    }, 350)
  }

  /**
   * 外側をクリックで各コンテンツを閉じる
   * @param event クリックイベント
   */
  const handleClickOutSide = (e: React.MouseEvent) => {
    // Galleryのスライドショーが存在する場合はクリックイベントを無視する
    const isYarlRootPresent = document.querySelector('.yarl__root')

    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(e.target as Node) &&
      !isYarlRootPresent
    ) {
      if (isArticleVisible) {
        handleCloseArticle()
      }
    }
  }

  /**
   * ページを訪れた際のアニメーション制御
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('')
    }, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <Layout location={location}>
      <div
        className={`body ${loading} ${
          isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <div id="wrapper" onClick={e => handleClickOutSide(e)}>
          <Header onOpenArticle={handleOpenArticle} timeout={timeoutState} />
          <Main
            timeout={timeoutState}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={wrapperRef}
          />
          <Footer timeout={timeoutState} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}
