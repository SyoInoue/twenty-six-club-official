import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  /** 画像ファイル名 */
  filename: string
  /** alt属性 */
  alt: string
}

/**
 * 画像を表示するコンポーネント
 */
export default function Image({ filename, alt }: Props) {
  /**
   * GraphQLで画像を取得
   */
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(width: 230, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)

  /**
   * 画像データを取得
   */
  const imageData = data.images.edges.find(
    (n: { node: { relativePath: string } }) => {
      return n.node.relativePath.includes(filename)
    }
  )

  if (!imageData) {
    return null
  }

  const image = getImage(imageData.node.childImageSharp.gatsbyImageData)

  return (
    <div>
      {image ? (
        <GatsbyImage image={image} alt="代替テキスト" />
      ) : (
        <p>画像がありません。</p>
      )}
    </div>
  )
}
