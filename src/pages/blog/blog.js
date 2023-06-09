import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Preview, fetchPages, fetchPage, cleanPage, pageTypes, bricks } from 'react-bricks/frontend'

import Layout from '../../components/layout/layout'
import Div from '../../components/div/div'
import Blogpostcover from '../../components/blogpostcover/blogpostcover'

import './blog.scss'

const apiKey = '747a0cd4-4b9d-46d3-a970-5c9eae6895f6'
// const apiKey = process.env.API_KEY || development.env.API_KEY

export default function Blog() {

    const [page, setPage] = useState('')


    useEffect(() => {
        fetchPages(apiKey, { type: 'blogPost' }).then((data) => {
            setPage(data)
            console.log(page)
        })
    }, [])


    // fetchPage('butterfly', apiKey).then((data) => {
    //     const myPage = cleanPage(data, pageTypes, bricks)
    //     console.log(myPage.content)
    //   })

    return (
        <Layout>
            <Div className='blog'>
                <Link to={"/blog/" + page[0]?.slug}>
                    <Blogpostcover title={page[0]?.name} />
                </Link>
                <Link to="/blog/blogpost/blogpost">
                    <Blogpostcover title="Ocean View" />
                </Link>
            </Div>
        </Layout>
    )
}
