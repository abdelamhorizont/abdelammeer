import React from 'react'
import { Link } from 'gatsby'
import Media from '../media/media'
import Headline from '../headline/headline'

import './blogpostcover.scss'

export default function Blogpostcover({ title }) {
  return (
      <div className='blogpostcover'>
        <Headline h1={title} />
        <Media />
      </div>
  )
}
