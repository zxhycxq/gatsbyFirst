import React from "react"
import { Link } from "gatsby"

const Footer = ({location}) => {
      console.log(`%c--this,location-- `, 'color:blue;', this,location)
  return (
    <>
      <div>
        <span>使用 gatsby 构建</span>
        <span>版权所有翻版必究 2019</span>
      </div>
    </>
  )
  
}

export default Footer
