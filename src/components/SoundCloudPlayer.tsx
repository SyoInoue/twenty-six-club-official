import React, { useEffect, useRef, useState } from 'react'

type SoundCloudPlayerProps = {
  /** 楽曲のURL */
  trackUrl: string
}

/**
 * SoundCloudの埋め込みプレーヤーを非表示で再生するコンポーネント
 * @param param0 楽曲のURL
 */
const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ trackUrl }) => {
  /** iframeへの参照 */
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  /** SoundCloud Widgetインスタンス */
  const [widget, setWidget] = useState<any>(null)

  /** 再生・一時停止の状態 */
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  /**
   * 再生・一時停止を切り替える関数
   */
  const handlePlayPause = () => {
    if (!widget) return

    if (isPlaying) {
      widget.pause()
    } else {
      widget.seekTo(0)
      widget.play()
    }
  }

  /**
   * SoundCloud Widget APIスクリプトを動的にロードする処理
   */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://w.soundcloud.com/player/api.js'
      script.onload = () => {
        if (iframeRef.current) {
          // SoundCloud Widgetインスタンスを作成
          const scWidget = (window as any).SC.Widget(iframeRef.current)
          setWidget(scWidget)

          // 再生・一時停止の状態を追跡
          scWidget.bind((window as any).SC.Widget.Events.PLAY, () =>
            setIsPlaying(true)
          )
          scWidget.bind((window as any).SC.Widget.Events.PAUSE, () =>
            setIsPlaying(false)
          )
        }
      }
      document.body.appendChild(script)
    }
  }, [trackUrl])

  return (
    <div>
      {/* SoundCloudの埋め込みプレーヤーを非表示で配置 */}
      <iframe
        ref={iframeRef}
        width="100%"
        height="166"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          trackUrl
        )}`}
        style={{ display: 'none' }}
      ></iframe>

      {/* カスタムの再生・一時停止ボタン */}
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#979797"
          onClick={handlePlayPause}
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
          onClick={handlePlayPause}
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
  )
}

export default SoundCloudPlayer
