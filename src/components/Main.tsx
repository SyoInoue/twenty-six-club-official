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

const photos = [
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581304/gallery/gallery-01.jpg',
    width: 2048,
    height: 1365,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581308/gallery/gallery-02.jpg',
    width: 2048,
    height: 1365,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581307/gallery/gallery-03.jpg',
    width: 2048,
    height: 1365,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581299/gallery/gallery-04.jpg',
    width: 2048,
    height: 1365,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581302/gallery/gallery-05.jpg',
    width: 2048,
    height: 1365,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581298/gallery/gallery-06.jpg',
    width: 2048,
    height: 1365,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581296/gallery/gallery-07.jpg',
    width: 1365,
    height: 2048,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581260/gallery/gallery-08.jpg',
    width: 2048,
    height: 1365,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581261/gallery/gallery-09.jpg',
    width: 1365,
    height: 2048,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581300/gallery/gallery-10.jpg',
    width: 2048,
    height: 1365,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581302/gallery/gallery-11.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581297/gallery/gallery-12.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581297/gallery/gallery-13.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581305/gallery/gallery-14.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581306/gallery/gallery-15.jpg',
    width: 1044,
    height: 1568,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581306/gallery/gallery-16.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581308/gallery/gallery-17.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581258/gallery/gallery-18.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581254/gallery/gallery-19.jpg',
    width: 1080,
    height: 1620,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581259/gallery/gallery-20.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581262/gallery/gallery-21.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581264/gallery/gallery-22.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581264/gallery/gallery-23.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581258/gallery/gallery-24.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581256/gallery/gallery-25.jpg',
    width: 1620,
    height: 1080,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581254/gallery/gallery-26.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581255/gallery/gallery-27.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581304/gallery/gallery-28.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581303/gallery/gallery-29.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581257/gallery/gallery-30.jpg',
    width: 1080,
    height: 1620,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581256/gallery/gallery-31.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581253/gallery/gallery-32.jpg',
    width: 1044,
    height: 1568,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581254/gallery/gallery-33.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581259/gallery/gallery-34.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581261/gallery/gallery-35.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581265/gallery/gallery-36.jpg',
    width: 1044,
    height: 1568,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581263/gallery/gallery-37.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581300/gallery/gallery-38.jpg',
    width: 2048,
    height: 1367,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581301/gallery/gallery-39.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581278/gallery/gallery-40.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581281/gallery/gallery-41.jpg',
    width: 1044,
    height: 1568,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581276/gallery/gallery-42.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581273/gallery/gallery-43.jpg',
    width: 2048,
    height: 1367,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581268/gallery/gallery-44.jpg',
    width: 1044,
    height: 1568,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581267/gallery/gallery-45.jpg',
    width: 1044,
    height: 1568,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581270/gallery/gallery-46.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581272/gallery/gallery-47.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581295/gallery/gallery-48.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581293/gallery/gallery-49.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581268/gallery/gallery-50.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581266/gallery/gallery-51.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581270/gallery/gallery-52.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581272/gallery/gallery-53.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581277/gallery/gallery-54.jpg',
    width: 1044,
    height: 1568,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581282/gallery/gallery-55.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581276/gallery/gallery-56.jpg',
    width: 1044,
    height: 1568,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581274/gallery/gallery-57.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581283/gallery/gallery-58.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581287/gallery/gallery-59.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581294/gallery/gallery-60.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581291/gallery/gallery-61.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581289/gallery/gallery-62.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581291/gallery/gallery-63.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581284/gallery/gallery-64.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581285/gallery/gallery-65.jpg',
    width: 1044,
    height: 1568,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581289/gallery/gallery-66.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581286/gallery/gallery-67.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581279/gallery/gallery-68.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581281/gallery/gallery-69.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581283/gallery/gallery-70.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581285/gallery/gallery-71.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581288/gallery/gallery-72.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581287/gallery/gallery-73.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581295/gallery/gallery-74.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581292/gallery/gallery-75.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581293/gallery/gallery-76.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581290/gallery/gallery-77.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581269/gallery/gallery-78.jpg',
    width: 1568,
    height: 1044,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581266/gallery/gallery-79.jpg',
    width: 1044,
    height: 1568,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581274/gallery/gallery-80.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581275/gallery/gallery-81.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581280/gallery/gallery-82.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581279/gallery/gallery-83.jpg',
    width: 1566,
    height: 1046,
  },
  {
    src:
      'https://res.cloudinary.com/ds3iqjqqh/image/upload/v1710581271/gallery/gallery-84.jpg',
    width: 4538,
    height: 3546,
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
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710514759/Feeling/Feeling_gaiuvh.wav',
      },
      {
        title: '2. situations -Adult Remix-',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710514738/Feeling/situations_-Adult_Remix-_nnitb1.wav',
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
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710577699/Lady/Lady_aqnf2e.wav',
      },
      {
        title: '2. Stay who you are -Tropical Remix-',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710577713/Lady/Stay_who_you_are_-Tropical_Remix-_grxq1a.wav',
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
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710577656/Orgasm/orgasm_leyk8j.wav',
      },
      {
        title: '2. 変わりゆく情景',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710577682/Orgasm/kawariyukuzyokei_ro65wz.wav',
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
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595674/zero/zero_azhgul.wav',
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
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710577770/CandyPop/candypop_qytn6l.wav',
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
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710577973/Ever/EVER_zbwcam.wav',
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
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595547/Toy/ME_hbyhts.wav',
      },
      {
        title: '2. 馴れ初め',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595552/Toy/naresome_k1gqcf.wav',
      },
      {
        title: '3. 灯',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595549/Toy/akari_bifzce.wav',
      },
      {
        title: '4. 淑女（Toy mix.）',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595538/Toy/lady_Toy_mix._s8vcuc.wav',
      },
      {
        title: '5. 野辺送り',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595562/Toy/nobeokuri_ajduw2.wav',
      },
      {
        title: '6. 101（Interlude.）',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595578/Toy/101_Interlude._p5advl.wav',
      },
      {
        title: '7. 402号室の住人',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595585/Toy/402gousitunozyunin_jgijq6.wav',
      },
      {
        title: '8. オーガズム（Toy mix.）',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595540/Toy/orgasm_Toy_mix._nkd6ci.wav',
      },
      {
        title: '9. 見世物',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595556/Toy/misemono_jlzkju.wav',
      },
      {
        title: '10. Feeling（Toy mix.）',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595565/Toy/feeling_Toy_mix._bj1bce.wav',
      },
      {
        title: '11. 泡沫',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710595570/Toy/utakata_itcaoy.wav',
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
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710508074/SixNearlyEqual/XXVI_urivwd.wav',
      },
      {
        title: '2. sexual',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710508087/SixNearlyEqual/sexual_sofmla.wav',
      },
      {
        title: '3. mystique',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710508086/SixNearlyEqual/mystique_cxnuwi.wav',
      },
      {
        title: '4. respiration（inst.）',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710508080/SixNearlyEqual/respiration_bp65jg.wav',
      },
      {
        title: '5. if',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710508092/SixNearlyEqual/if_bm06ww.wav',
      },
      {
        title: '6. 00:00',
        musicUrl:
          'https://res.cloudinary.com/ds3iqjqqh/video/upload/v1710508084/SixNearlyEqual/0000_ajomfr.wav',
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
            <iframe
              src="https://www.youtube.com/embed/mVV6SYYybj0?si=SwlhSy75YUrMGNE9"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
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
