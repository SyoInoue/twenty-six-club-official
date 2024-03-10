import React from 'react'
import tscLogoWhite from '../images/tsc-logo-white.png'

type Props = {
  /** タイムアウト中かどうかのフラグ */
  timeout: boolean
  /** 各子要素を開くための関数 */
  onOpenArticle: (article: string) => void
}

/**
 * ヘッダーコンポーネント
 */
export default function Header({ timeout, onOpenArticle }: Props) {
  return (
    <header id="header" style={timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <img className="icon" src={tscLogoWhite} alt="icon"></img>
      </div>
      <div className="content">
        <div className="inner">
          <h1>TWENTY SIX CLUB</h1>
          <p>
            electro × rock = twenty six club
            <br />
            <span>
              Once creation is tailored to be understood,{' '}
              <br style={{ display: 'none' }} />
              it ceases to be art.
            </span>
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                onOpenArticle('intro')
              }}
            >
              ABOUT US
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onOpenArticle('work')
              }}
            >
              DISCOGRAPHY
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onOpenArticle('about')
              }}
            >
              VIDEO
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onOpenArticle('contact')
              }}
            >
              GALLERY
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
