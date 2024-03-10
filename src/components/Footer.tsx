import React from 'react'

type Props = {
  /** タイムアウト中かどうかのフラグ */
  timeout: boolean
}

/**
 * フッターコンポーネント
 */
export default function Footer({ timeout }: Props) {
  return (
    <footer id="footer" style={timeout ? { display: 'none' } : {}}>
      <p className="copyright">
        &copy; © 2024 TWENTY SIX CLUB. All Rights Reserved. | email :
        funnyfacee7777@gmail.com
      </p>
    </footer>
  )
}
