import * as React from "react"
import { Link } from "gatsby"
import Div from "../components/div/div"
import Layout from "../components/layout/layout"

import '../css/global.scss'
import '../css/reset.scss'

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Div>
          <h1>welcome</h1>
        </Div>
      </Layout>
    </main >
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
