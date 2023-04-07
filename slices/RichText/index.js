import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.RichTextSlice} RichTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextSlice>} RichTextProps
 * @param { RichTextProps }
 */
const RichText = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title &&
        <PrismicRichText field={slice.primary.title}/>
      }
    </span>
    {
      slice.primary.description &&
      <PrismicRichText field={slice.primary.description}/>
    }
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default RichText