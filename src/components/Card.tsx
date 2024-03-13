import React from 'react'
import Image from './Image'

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
  // 改行文字に基づいてdescriptionを分割し、配列に変換。
  const descriptionLines = description.split('\n').map((line, index) => (
    // 最後の行には<br />が追加されないようにする。
    <React.Fragment key={index}>
      {line}
      {index < description.split('\n').length - 1 && <br />}
    </React.Fragment>
  ))

  return (
    <div className="card">
      <Image filename={jacket} alt={alt} />
      <p className="day">{day}</p>
      <p className="type">{type}</p>
      <p className="label">{label}</p>
      <div className="description">
        <p>{descriptionLines}</p>
      </div>
    </div>
  )
}
