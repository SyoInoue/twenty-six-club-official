import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Layout from '../components/layout'

export default function IndexPage(props) {
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
  const wrapperRef = useRef(null)

  const handleOpenArticle = article => {
    setIsArticleVisible(!isArticleVisible)

    setTimeout(() => {
      setTimeoutState(!timeoutState)
    }, 325)

    setTimeout(() => {
      setArticleTimeout(!articleTimeout)
    }, 350)

    setArticle(article)
  }

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

  const handleClickOutside = event => {
    const isYarlRootPresent = document.querySelector('.yarl__root')

    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target) &&
      !isYarlRootPresent
    ) {
      if (isArticleVisible) {
        handleCloseArticle()
      }
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('')
    }, 100)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout location={props.location}>
      <div
        className={`body ${loading} ${
          isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <div id="wrapper" ref={wrapperRef}>
          <Header onOpenArticle={handleOpenArticle} timeout={timeoutState} />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={timeoutState}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={node => (wrapperRef.current = node)}
          />
          <Footer timeout={timeoutState} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}
