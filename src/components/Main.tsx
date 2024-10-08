import React, { useState } from 'react'
import CloseButton from './CloseButton'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Card from './Card'
import { StaticImage } from 'gatsby-plugin-image'
import {
  LivePhoto1,
  LivePhoto2,
  LivePhoto3,
  LivePhoto4,
  LivePhoto5,
  LivePhoto6,
  LivePhoto7,
  LivePhoto8,
  LivePhoto9,
  LivePhoto10,
  LivePhoto11,
  LivePhoto12,
  LivePhoto13,
  LivePhoto14,
  LivePhoto15,
  LivePhoto16,
  LivePhoto17,
  LivePhoto18,
  LivePhoto19,
  LivePhoto20,
  LivePhoto21,
  LivePhoto22,
  LivePhoto23,
  LivePhoto24,
  LivePhoto25,
  LivePhoto26,
  LivePhoto27,
  LivePhoto28,
  LivePhoto29,
  LivePhoto30,
  LivePhoto31,
  LivePhoto32,
  LivePhoto33,
  LivePhoto34,
  LivePhoto35,
  LivePhoto36,
  LivePhoto37,
  LivePhoto38,
  LivePhoto39,
  LivePhoto40,
  LivePhoto41,
  LivePhoto42,
  LivePhoto43,
  LivePhoto44,
  LivePhoto45,
  LivePhoto46,
  LivePhoto47,
  LivePhoto48,
  LivePhoto49,
  LivePhoto50,
  LivePhoto51,
  LivePhoto52,
  LivePhoto53,
  LivePhoto54,
  LivePhoto55,
  LivePhoto56,
  LivePhoto57,
  LivePhoto58,
  LivePhoto59,
  LivePhoto60,
  LivePhoto61,
  LivePhoto62,
  LivePhoto63,
  LivePhoto64,
  LivePhoto65,
  LivePhoto66,
  LivePhoto67,
  LivePhoto68,
  LivePhoto69,
  LivePhoto70,
  LivePhoto71,
  LivePhoto72,
  LivePhoto73,
  LivePhoto74,
  LivePhoto75,
  LivePhoto76,
  LivePhoto77,
  LivePhoto78,
  LivePhoto79,
  LivePhoto80,
  LivePhoto81,
  LivePhoto82,
  LivePhoto83,
  LivePhoto84,
  LivePhoto85,
} from '../components/LivePhoto'

const photos = [
  {
    src: LivePhoto1,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto2,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto3,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto4,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto5,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto6,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto7,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto8,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto9,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto10,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto11,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto12,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto13,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto14,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto15,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto16,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto17,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto18,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto19,
    width: 1365,
    height: 2048,
  },
  {
    src: LivePhoto20,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto21,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto22,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto23,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto24,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto25,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto26,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto27,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto28,
    width: 2048,
    height: 1365,
  },
  {
    src: LivePhoto29,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto30,
    width: 1568,
    height: 1046,
  },
  {
    src: LivePhoto31,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto32,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto33,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto34,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto35,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto36,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto37,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto38,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto39,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto40,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto41,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto42,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto43,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto44,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto45,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto46,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto47,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto48,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto49,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto50,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto51,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto52,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto53,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto54,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto55,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto56,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto57,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto58,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto59,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto60,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto61,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto62,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto63,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto64,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto65,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto66,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto67,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto68,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto69,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto70,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto71,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto72,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto73,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto74,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto75,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto76,
    width: 1044,
    height: 1568,
  },
  {
    src: LivePhoto77,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto78,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto79,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto80,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto81,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto82,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto83,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto84,
    width: 1568,
    height: 1044,
  },
  {
    src: LivePhoto85,
    width: 1044,
    height: 1568,
  },
]

const cardsData = [
  {
    day: '2019/01/25',
    type: 'Single',
    label: 'Feeling',
    description: [
      {
        title: '1. Feeling',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/feeling',
      },
      {
        title: '2. situations -Adult Remix-',
        musicUrl:
          'https://soundcloud.com/syo_music_channnel/situations-adult-remix',
      },
    ],
    jacket: 'feeling-jacket.jpg',
    alt: 'FeelingJacket',
  },
  {
    day: '2019/03/14',
    type: 'Single',
    label: '淑女',
    description: [
      {
        title: '1. 淑女',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/g4lyrapw7sjb',
      },
      {
        title: '2. Stay who you are -Tropical Remix-',
        musicUrl:
          'https://soundcloud.com/syo_music_channnel/stay-who-you-are-tropical-remix',
      },
    ],
    jacket: 'lady-jacket.jpg',
    alt: '淑女Jacket',
  },
  {
    day: '2019/05/20',
    type: 'Single',
    label: 'オーガズム',
    description: [
      {
        title: '1. オーガズム',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/mbgsbr3dwc3x',
      },
      {
        title: '2. 変わりゆく情景',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/58iqejijakb6',
      },
    ],
    jacket: 'orgasm-jacket.jpg',
    alt: 'オーガズムJacket',
  },
  {
    day: '2019/09/01',
    type: 'Single',
    label: '零',
    description: [
      {
        title: '1. 零',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/zero',
      },
    ],
    jacket: 'zero-jacket.png',
    alt: '零Jacket',
  },
  {
    day: '2019/11/01',
    type: 'Single',
    label: 'キャンディーポップ',
    description: [
      {
        title: '1. キャンディーポップ',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/candy-pop',
      },
    ],
    jacket: 'candy-pop-jacket.png',
    alt: 'キャンディーポップJacket',
  },
  {
    day: '2020/05/16',
    type: 'Single',
    label: 'EVER',
    description: [
      {
        title: '1. EVER',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/ever',
      },
    ],
    jacket: 'ever-jacket.png',
    alt: 'EverJacket',
  },
  {
    day: '2019/10/25',
    type: 'Album',
    label: 'Toy',
    description: [
      {
        title: '1. ME',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/me',
      },
      {
        title: '2. 馴れ初め',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/s6waalkqjt3d',
      },
      {
        title: '3. 灯',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/9tsec0hwyfbb',
      },
      {
        title: '4. 淑女（Toy mix.）',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/g4lyrapw7sjb',
      },
      {
        title: '5. 野辺送り',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/qdldam5crzqh',
      },
      {
        title: '6. 101（Interlude.）',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/101-interlude',
      },
      {
        title: '7. 402号室の住人',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/402a1',
      },
      {
        title: '8. オーガズム（Toy mix.）',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/mbgsbr3dwc3x',
      },
      {
        title: '9. 見世物',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/raleqnnxg3ri',
      },
      {
        title: '10. Feeling（Toy mix.）',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/feeling',
      },
      {
        title: '11. 泡沫',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/pc2zelh5djyr',
      },
    ],
    jacket: 'toy-jacket.png',
    alt: 'ToyJacket',
  },
  {
    day: '2020/04/01',
    type: 'Album',
    label: 'Six Nearly Equal',
    description: [
      {
        title: '1. XXVI（inst.）',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/xxvi',
      },
      {
        title: '2. sexual',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/sexual',
      },
      {
        title: '3. mystique',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/mystique',
      },
      {
        title: '4. respiration（inst.）',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/respiration',
      },
      {
        title: '5. if',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/if',
      },
      {
        title: '6. 00:00',
        musicUrl: 'https://soundcloud.com/syo_music_channnel/zero',
      },
    ],
    jacket: 'six-nearly-equal-jacket.png',
    alt: 'SixNearlyEqualJacket',
  },
]

type Props = {
  /** 各子要素を閉じるための関数 */
  onCloseArticle: () => void
  /** メインコンポーネントのrefをセットするための関数 */
  setWrapperRef: React.ForwardedRef<HTMLDivElement>
  /** 表示中のコンテンツ */
  article: string
  /** 最初のアニメーションのフラグ */
  articleTimeout: boolean
  /** 二回目アニメーションのフラグ */
  timeout: boolean
}

/**
 * 各コンテンツの表示を行うコンポーネント
 */
export default function Main({
  onCloseArticle,
  setWrapperRef,
  article,
  articleTimeout,
  timeout,
}: Props) {
  /** GalleryをスライドさせるためのState */
  const [index, setIndex] = useState(-1)

  /** Youtube動画の表示State */
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  /**
   * サムネイルをクリックした際に動画を表示する関数
   */
  const handleClickVideoThumbnail = () => {
    setIsVideoLoaded(true)
  }

  return (
    <div
      id="main"
      style={timeout ? { display: 'flex' } : { display: 'none' }}
      ref={setWrapperRef}
    >
      <article
        id="intro"
        className={`${article === 'intro' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">about us</h2>
        <span className="image main">
          <StaticImage src="../images/tsc-artist-photo.png" alt="ArtistPhoto" />
        </span>
        <p>
          「27CLUB」と言う言葉がある。
          <br />
          ロックンロールの歴史において最も謎めいた非常に痛ましい偶然のひとつだ。
          <br />
          Kurt Cobain、Jimi Hendrix、Jim Morrison、Robert Johnson等
          <br />
          数多くのロックスター達が27歳と言う年齢でこの世を去っている。
          <br />
          「TWENTY SIX CLUB」はメンバー全員の年齢が26歳の時に結成された。
          <br />
          数多くのロックスター達が27歳と言う年齢でこの世を去る中で、
          <br />
          26歳の時に結成したこのバンドの音楽で生き続けていくと言う誓いの元、
          <br />
          呪われたジンクスへのアンチテーゼとして名付け結成された。
        </p>
        <CloseButton onCloseArticle={onCloseArticle} />
      </article>

      <article
        id="work"
        className={`${article === 'work' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major discography">discography</h2>
        <div className="artworks">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <CloseButton onCloseArticle={onCloseArticle} />
      </article>

      <article
        id="about"
        className={`${article === 'about' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">video</h2>
        <span className="image main">
          <div className="responsive-iframe">
            {!isVideoLoaded ? (
              <button
                onClick={handleClickVideoThumbnail}
                style={{ width: '100%', height: '100%' }}
              >
                <StaticImage
                  src="../images/sixnearlyequal-thumbnail.png"
                  alt="thumbnail"
                />
              </button>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/mVV6SYYybj0?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </span>
        <CloseButton onCloseArticle={onCloseArticle} />
      </article>

      <article
        id="gallery"
        className={`${article === 'contact' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">GALLERY</h2>
        <PhotoAlbum
          layout="columns"
          photos={photos}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Slideshow, Thumbnails, Zoom]}
        />
        <CloseButton onCloseArticle={onCloseArticle} />
      </article>
    </div>
  )
}
