import React, { useState } from 'react'
import useSound from 'use-sound'

type Props = {
  /** 曲名 */
  title: string
  /** 楽曲のURL */
  musicUrl: string
}

export default function MusicName({ title, musicUrl }: Props) {
  /** 音楽再生State */
  const [isPlayAudio, setIsPlayAudio] = useState(false)

  /** 音楽再生フック */
  const [play, { stop }] = useSound(musicUrl, {
    volume: 0.7,
    onend: () => {
      setIsPlayAudio(false)
    },
  })

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

  return (
    <div className="description-lines">
      <div className="description-lines__list">
        {title}
        {isPlayAudio ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#979797"
            onClick={handleClickAudio}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#979797"
            onClick={handleClickAudio}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>
        )}
      </div>
      <div className="description-lines__border" />
    </div>
  )
}
