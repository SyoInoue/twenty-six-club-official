import React, { useState } from 'react'
import SoundCloudPlayer from './SoundCloudPlayer'

type Props = {
  /** 曲名 */
  title: string
  /** 楽曲のURL */
  musicUrl: string
}

export default function MusicName({ title, musicUrl }: Props) {
  return (
    <div className="description-lines">
      <div className="description-lines__list">
        {title}
        <SoundCloudPlayer trackUrl={musicUrl} />
      </div>
      <div className="description-lines__border" />
    </div>
  )
}
