import React from 'react'
import './headline.scss'

export default function Headline({h1, h2}) {
  return (
   <div className='headline'>
      <h1>{h1}</h1>
     {h2 && <h2>{h2}</h2>}
   </div>
  )
}
