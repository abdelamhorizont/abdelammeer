import React from 'react'
import { Link } from 'gatsby'

import './layout.scss'

export default function Layout({children}) {
  return (
    <div className='navigation'>
    <title>abdelammeer</title>
    <header>
        <nav>
            <div id='logo'><Link to="/">abdelammeer</Link></div>
            <ul>
                <li id='space'><Link to="/space/space">space</Link></li>
                <li id='blog'><Link to="/blog/blog">blog</Link></li>
                <li id='work'><Link to="/work/work">work</Link></li>
            </ul>
        </nav>
    </header>

    <main>
        {children}
    </main>
</div>
  )
}
