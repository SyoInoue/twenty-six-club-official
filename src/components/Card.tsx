import React from 'react'
import Image from './Image'
import MusicName from './MusicName'

type Props = {
  /** リリース日 */
  day: string
  /** シングルかアルバム */
  type: string
  /** シングル名かアルバム名 */
  label: string
  /** 曲順 */
  description: {
    /** 曲名 */
    title: string
    /** 楽曲のURL */
    musicUrl: string
  }[]
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
  return (
    <div className="card">
      <Image filename={jacket} alt={alt} />
      <p className="day">{day}</p>
      <p className="type">{type}</p>
      <p className="label">{label}</p>
      <div className="description">
        {description.map((data, index) => {
          return (
            <MusicName
              key={index}
              title={data.title}
              musicUrl={data.musicUrl}
            />
          )
        })}
      </div>
    </div>
  )
}
