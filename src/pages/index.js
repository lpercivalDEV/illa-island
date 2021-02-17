import React from "react"
import "../styles/styles.css"
import "../styles/tailwind.css"

import Header from "./Header.js"
import Footer from "./Footer.js"
import Palabras from "./Palabras.js"

const home = () => {
  return (
    <div clasName="container">
      <Header />
      <h1>illa island</h1>
      <ul>
        <li>home (logo/hero with nav)</li>
        <li>about (globe)</li>
        <li>tech (separate page)</li>
        <li>art (separate page)</li>
        <li>network (boat/island/maps)</li>
        <li>contact (msg in bottle)</li>
      </ul>

      <Palabras />
      <Footer />
    </div>
  )
}

export default home
