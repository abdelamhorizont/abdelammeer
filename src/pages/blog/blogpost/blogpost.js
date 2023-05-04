import React from 'react'

// import { Helmet } from 'react-helmet'

import Div from "../../../components/div/div"
import Headline from "../../../components/headline/headline"
import Media from '../../../components/media/media'
import P from '../../../components/p/p'
import Layout from '../../../components/layout/layout'
import Blogpostcover from '../../../components/blogpostcover/blogpostcover'

import './blogpost.scss'


export default function Blogpost() {

  return (
    <Layout>
      <Div className="blogpost">
        <Blogpostcover title="artificial butterfly" />
        <P />
        <h2> irgendwas </h2>
        <P />
      </Div>
    </ Layout>
  )
}

// const PagePreview: React.FC = () => {
//   return (
//     <>
//       <Helmet title="Preview" />
//       <Layout>
//         <Preview />
//       </Layout>
//     </>
//   )
// }

// export default PagePreview

