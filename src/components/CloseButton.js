import React from 'react'

/**
 * CloseButtonコンポーネント
 */
export default function CloseButton({ onCloseArticle }) {
  /**
   * クローズボタンをクリックさrたときの処理
   */
  const handleClickCloseButton = () => {
    onCloseArticle()
  }
  return (
    <button
      className="close"
      aria-label="Close Article"
      onClick={handleClickCloseButton}
    ></button>
  )
}
