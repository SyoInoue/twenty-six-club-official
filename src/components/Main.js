import React, { useState } from 'react'
import CloseButton from './CloseButton'
import tscArtistPhoto from '../images/tsc-artist-photo.png'
import toyJacket from '../images/toy-jacket.png'
import sixNearlyEqualJacket from '../images/six-nearly-equal-jacket.png'
import everJacket from '../images/ever-jacket.png'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import gallery01 from '../images/gallery/gallery-01.jpg'
import gallery02 from '../images/gallery/gallery-02.jpg'
import gallery03 from '../images/gallery/gallery-03.jpg'
import gallery04 from '../images/gallery/gallery-04.jpg'
import gallery05 from '../images/gallery/gallery-05.jpg'
import gallery06 from '../images/gallery/gallery-06.jpg'
import gallery07 from '../images/gallery/gallery-07.jpg'
import gallery08 from '../images/gallery/gallery-08.jpg'
import gallery09 from '../images/gallery/gallery-09.jpg'
import gallery10 from '../images/gallery/gallery-10.jpg'
import gallery11 from '../images/gallery/gallery-11.jpg'
import gallery12 from '../images/gallery/gallery-12.jpg'
import gallery13 from '../images/gallery/gallery-13.jpg'
import gallery14 from '../images/gallery/gallery-14.jpg'
import gallery15 from '../images/gallery/gallery-15.jpg'
import gallery16 from '../images/gallery/gallery-16.jpg'
import gallery17 from '../images/gallery/gallery-17.jpg'
import gallery18 from '../images/gallery/gallery-18.jpg'
import gallery19 from '../images/gallery/gallery-19.jpg'
import gallery20 from '../images/gallery/gallery-20.jpg'
import gallery21 from '../images/gallery/gallery-21.jpg'
import gallery22 from '../images/gallery/gallery-22.jpg'
import gallery23 from '../images/gallery/gallery-23.jpg'
import gallery24 from '../images/gallery/gallery-24.jpg'
import gallery25 from '../images/gallery/gallery-25.jpg'
import gallery26 from '../images/gallery/gallery-26.jpg'
import gallery27 from '../images/gallery/gallery-27.jpg'
import gallery28 from '../images/gallery/gallery-28.jpg'
import gallery29 from '../images/gallery/gallery-29.jpg'
import gallery30 from '../images/gallery/gallery-30.jpg'
import gallery31 from '../images/gallery/gallery-31.jpg'
import gallery32 from '../images/gallery/gallery-32.jpg'
import gallery33 from '../images/gallery/gallery-33.jpg'
import gallery34 from '../images/gallery/gallery-34.jpg'
import gallery35 from '../images/gallery/gallery-35.jpg'
import gallery36 from '../images/gallery/gallery-36.jpg'
import gallery37 from '../images/gallery/gallery-37.jpg'
import gallery38 from '../images/gallery/gallery-38.jpg'
import gallery39 from '../images/gallery/gallery-39.jpg'
import gallery40 from '../images/gallery/gallery-40.jpg'
import gallery41 from '../images/gallery/gallery-41.jpg'
import gallery42 from '../images/gallery/gallery-42.jpg'
import gallery43 from '../images/gallery/gallery-43.jpg'
import gallery44 from '../images/gallery/gallery-44.jpg'
import gallery45 from '../images/gallery/gallery-45.jpg'
import gallery46 from '../images/gallery/gallery-46.jpg'
import gallery47 from '../images/gallery/gallery-47.jpg'
import gallery48 from '../images/gallery/gallery-48.jpg'
import gallery49 from '../images/gallery/gallery-49.jpg'
import gallery50 from '../images/gallery/gallery-50.jpg'
import gallery51 from '../images/gallery/gallery-51.jpg'
import gallery52 from '../images/gallery/gallery-52.jpg'
import gallery53 from '../images/gallery/gallery-53.jpg'
import gallery54 from '../images/gallery/gallery-54.jpg'
import gallery55 from '../images/gallery/gallery-55.jpg'
import gallery56 from '../images/gallery/gallery-56.jpg'
import gallery57 from '../images/gallery/gallery-57.jpg'
import gallery58 from '../images/gallery/gallery-58.jpg'
import gallery59 from '../images/gallery/gallery-59.jpg'
import gallery60 from '../images/gallery/gallery-60.jpg'
import gallery61 from '../images/gallery/gallery-61.jpg'
import gallery62 from '../images/gallery/gallery-62.jpg'
import gallery63 from '../images/gallery/gallery-63.jpg'
import gallery64 from '../images/gallery/gallery-64.jpg'
import gallery65 from '../images/gallery/gallery-65.jpg'
import gallery66 from '../images/gallery/gallery-66.jpg'
import gallery67 from '../images/gallery/gallery-67.jpg'
import gallery68 from '../images/gallery/gallery-68.jpg'
import gallery69 from '../images/gallery/gallery-69.jpg'
import gallery70 from '../images/gallery/gallery-70.jpg'
import gallery71 from '../images/gallery/gallery-71.jpg'
import gallery72 from '../images/gallery/gallery-72.jpg'
import gallery73 from '../images/gallery/gallery-73.jpg'
import gallery74 from '../images/gallery/gallery-74.jpg'
import gallery75 from '../images/gallery/gallery-75.jpg'
import gallery76 from '../images/gallery/gallery-76.jpg'
import gallery77 from '../images/gallery/gallery-77.jpg'
import gallery78 from '../images/gallery/gallery-78.jpg'
import gallery79 from '../images/gallery/gallery-79.jpg'
import gallery80 from '../images/gallery/gallery-80.jpg'
import gallery81 from '../images/gallery/gallery-81.jpg'
import gallery82 from '../images/gallery/gallery-82.jpg'
import gallery83 from '../images/gallery/gallery-83.jpg'
import gallery84 from '../images/gallery/gallery-84.jpg'

const photos = [
  { src: gallery01, width: 2048, height: 1365 },
  { src: gallery02, width: 2048, height: 1365 },
  { src: gallery03, width: 2048, height: 1365 },
  { src: gallery04, width: 2048, height: 1365 },
  { src: gallery05, width: 2048, height: 1365 },
  { src: gallery06, width: 2048, height: 1365 },
  { src: gallery07, width: 1365, height: 2048 },
  { src: gallery08, width: 2048, height: 1365 },
  { src: gallery09, width: 1365, height: 2048 },
  { src: gallery10, width: 2048, height: 1365 },
  { src: gallery11, width: 1568, height: 1044 },
  { src: gallery12, width: 1568, height: 1044 },
  { src: gallery13, width: 1568, height: 1044 },
  { src: gallery14, width: 1568, height: 1044 },
  { src: gallery15, width: 1044, height: 1568 },
  { src: gallery16, width: 1568, height: 1044 },
  { src: gallery17, width: 1568, height: 1044 },
  { src: gallery18, width: 1568, height: 1044 },
  { src: gallery19, width: 1080, height: 1620 },
  { src: gallery20, width: 1568, height: 1044 },
  { src: gallery21, width: 1568, height: 1044 },
  { src: gallery22, width: 1568, height: 1044 },
  { src: gallery23, width: 1568, height: 1044 },
  { src: gallery24, width: 1568, height: 1044 },
  { src: gallery25, width: 1620, height: 1080 },
  { src: gallery26, width: 1568, height: 1044 },
  { src: gallery27, width: 1568, height: 1044 },
  { src: gallery28, width: 1568, height: 1044 },
  { src: gallery29, width: 1568, height: 1044 },
  { src: gallery30, width: 1080, height: 1620 },
  { src: gallery31, width: 1568, height: 1044 },
  { src: gallery32, width: 1044, height: 1568 },
  { src: gallery33, width: 1568, height: 1044 },
  { src: gallery34, width: 1568, height: 1044 },
  { src: gallery35, width: 1568, height: 1044 },
  { src: gallery36, width: 1044, height: 1568 },
  { src: gallery37, width: 1568, height: 1044 },
  { src: gallery38, width: 2048, height: 1367 },
  { src: gallery39, width: 1568, height: 1044 },
  { src: gallery40, width: 1568, height: 1044 },
  { src: gallery41, width: 1044, height: 1568 },
  { src: gallery42, width: 1568, height: 1044 },
  { src: gallery43, width: 2048, height: 1367 },
  { src: gallery44, width: 1044, height: 1568 },
  { src: gallery45, width: 1044, height: 1568 },
  { src: gallery46, width: 1568, height: 1044 },
  { src: gallery47, width: 1568, height: 1044 },
  { src: gallery48, width: 1568, height: 1044 },
  { src: gallery49, width: 1568, height: 1044 },
  { src: gallery50, width: 1568, height: 1044 },
  { src: gallery51, width: 1568, height: 1044 },
  { src: gallery52, width: 1568, height: 1044 },
  { src: gallery53, width: 1568, height: 1044 },
  { src: gallery54, width: 1044, height: 1568 },
  { src: gallery55, width: 1568, height: 1044 },
  { src: gallery56, width: 1044, height: 1568 },
  { src: gallery57, width: 1568, height: 1044 },
  { src: gallery58, width: 1568, height: 1044 },
  { src: gallery59, width: 1568, height: 1044 },
  { src: gallery60, width: 1568, height: 1044 },
  { src: gallery61, width: 1568, height: 1044 },
  { src: gallery62, width: 1568, height: 1044 },
  { src: gallery63, width: 1568, height: 1044 },
  { src: gallery64, width: 1568, height: 1044 },
  { src: gallery65, width: 1044, height: 1568 },
  { src: gallery66, width: 1566, height: 1046 },
  { src: gallery67, width: 1566, height: 1046 },
  { src: gallery68, width: 1566, height: 1046 },
  { src: gallery69, width: 1566, height: 1046 },
  { src: gallery70, width: 1566, height: 1046 },
  { src: gallery71, width: 1566, height: 1046 },
  { src: gallery72, width: 1566, height: 1046 },
  { src: gallery73, width: 1566, height: 1046 },
  { src: gallery74, width: 1568, height: 1044 },
  { src: gallery75, width: 1568, height: 1044 },
  { src: gallery76, width: 1568, height: 1044 },
  { src: gallery77, width: 1568, height: 1044 },
  { src: gallery78, width: 1568, height: 1044 },
  { src: gallery79, width: 1044, height: 1568 },
  { src: gallery80, width: 1566, height: 1046 },
  { src: gallery81, width: 1566, height: 1046 },
  { src: gallery82, width: 1566, height: 1046 },
  { src: gallery83, width: 1566, height: 1046 },
  { src: gallery84, width: 4538, height: 3546 },
]

/**
 * 各コンテンツの表示を行うコンポーネント
 */
export default function Main({
  onCloseArticle,
  setWrapperRef,
  article,
  articleTimeout,
  timeout,
}) {
  const [index, setIndex] = useState(-1)

  return (
    <div
      ref={setWrapperRef}
      id="main"
      style={timeout ? { display: 'flex' } : { display: 'none' }}
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
          <img src={tscArtistPhoto} alt="" />
        </span>
        {/* <h3>Biography</h3> */}
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
        {/* <h3>Philosophy</h3>
        <p>
          理解される事を前提としない音楽。
          <br />
          理解されるためにリスナーに擦り寄ってるような音楽が巷に蔓延る中で、
          <br />
          「TWENTY SIX CLUB」は理解されないことを怖がらない。
          <br />
          わかりやすい表現に終始した音楽は自分達の表現領域ではないと定義付ける。
          <br />
          内側から溢れ出す「悲しみ」や「叫び」を自分達の色に染めてアウトプットする。
          <br />
          それは耳馴染みの悪い代物かもしれない。それは一見歪な形を表しているかもしれない。
          <br />
          それでも奏で続けるのは「生き続ける」ため。
          <br />
          この世界に「存在した証」を残すため。
        </p> */}
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
          <div className="card">
            <img className="artwork" src={toyJacket} alt="ToyJacket"></img>
            <p className="day">2019/10/25 Release -</p>
            <p className="type">Album</p>
            <p className="label">Toy</p>
            <div className="description">
              <p>
                1. ME <br />
                2. 馴れ初め
                <br /> 3. 灯 <br />
                4. 淑女（Toy mix.）
                <br /> 5. 野辺送り
                <br />
                6. 101（Interlude.）
                <br /> 7. 402号室の住人
                <br /> 8. オーガズム（Toy mix.）
                <br />
                9. 見世物 <br />
                10. Feeling（Toy mix.）
                <br /> 11. 泡沫
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="artwork"
              src={sixNearlyEqualJacket}
              alt="SixNearlyEqualJacket"
            ></img>
            <p className="day">2020/04/01 Release -</p>
            <p className="type">Album</p>
            <p className="label">Six Nearly Equal </p>
            <div className="description">
              <p>
                1. XXVI（inst.） <br />
                2. sexual
                <br />
                3. mystique <br />
                4. respiration（inst.）
                <br />
                5. if
                <br />
                6. 00:00
              </p>
            </div>
          </div>
          <div className="card">
            <img className="artwork" src={everJacket} alt="EverJacket"></img>
            <p className="day">2020/05/16 Release -</p>
            <p className="type">Single</p>
            <p className="label">EVER</p>
            <div className="description">
              <p>1. EVER</p>
            </div>
          </div>
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
