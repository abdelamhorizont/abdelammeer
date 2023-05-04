import React from 'react'
import {GatsbyImage} from 'gatsby'
import butterfly from '../../assets/images/butterfly.png'
import './media.scss'

export default function Media() {
  return (
    <div className='media'>
      <img src={butterfly} alt="" />
   </div>
  )
}
