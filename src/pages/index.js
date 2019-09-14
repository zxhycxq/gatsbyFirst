import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/Footer"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>你好呀</h1>
    <pre>   let that =  this; </pre>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {/*<Link to="/About/">关于2</Link>*/}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
