import React from 'react'

import { Preview } from 'react-bricks/frontend'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout/layout'

const PagePreview: React.FC = () => {
  return (
    <>
      <Helmet title="Preview" />
      <Layout>
        <Preview />
      </Layout>
    </>
  )
}

export default PagePreview
