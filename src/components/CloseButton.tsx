import React from 'react'

type Props = {
  /** 各子要素を閉じるための関数 */
  onCloseArticle: () => void
}

/**
 * CloseButtonコンポーネント
 */
export default function CloseButton({ onCloseArticle }: Props) {
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
