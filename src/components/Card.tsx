import React, { useState } from 'react'
import Image from './Image'
import useSound from 'use-sound'

type Props = {
  /** リリース日 */
  day: string
  /** シングルかアルバム */
  type: string
  /** シングル名かアルバム名 */
  label: string
  /** 曲順 */
  description: string
  /** ジャケット画像 */
  jacket: string
  /** ジャケット画像のalt属性 */
  alt: string
}

/**
 * ディスコグラフィーのカードを表示するコンポーネント
 */
export default function Card({
  day,
  type,
  label,
  description,
  jacket,
  alt,
}: Props) {
  /** 音楽再生State */
  const [isPlayAudio, setIsPlayAudio] = useState(false)

  const [play, { stop }] = useSound(
    'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710508092/SixNearlyEqual/if_bm06ww.wav'
  )

  /**
   * 音楽再生ボタンクリック時の処理
   */
  const handleClickAudio = () => {
    setIsPlayAudio(!isPlayAudio)

    if (isPlayAudio) {
      stop()
      return
    }
    play()
  }

  /**
   * 改行文字に基づいてdescriptionを分割し、配列に変換。
   */
  const descriptionLines = description.split('\n').map((line, index) => (
    // 最後の行には<br />が追加されないようにする。
    <div key={index} className="description-lines">
      <div className="description-lines__list">
        {line}
        {isPlayAudio ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            onClick={handleClickAudio}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            onClick={handleClickAudio}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>
        )}
      </div>
      <div className="description-lines__border" />
    </div>
  ))

  return (
    <div className="card">
      <Image filename={jacket} alt={alt} />
      <p className="day">{day}</p>
      <p className="type">{type}</p>
      <p className="label">{label}</p>
      <div className="description">{descriptionLines}</div>
    </div>
  )
}
