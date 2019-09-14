import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>什么都没有找到</h1>
    <p>看看是不是链接输错了</p>
    <p>返回首页<a href="http://blog.chengxiangqian.com"></a></p>
  </Layout>
)

export default NotFoundPage
