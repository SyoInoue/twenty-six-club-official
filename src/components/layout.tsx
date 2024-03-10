import React from 'react'

import '../assets/scss/main.scss'

type Props = {
  /** 子要素 */
  children: React.ReactNode
  /** ページのURL */
  location?: Location
}

/**
 * 全てで共通のレイアウトコンポーネント
 * pathがルートならスタイルを当てず、それ以外ならスタイルを当てる処理を記述
 */
export default function Layout({ children, location }: Props) {
  return location && location.pathname === '/' ? (
    <div>{children}</div>
  ) : (
    <div id="wrapper" className="page">
      <div>{children}</div>
    </div>
  )
}
