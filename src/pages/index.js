import React from "react"
import "../styles/styles.css"
import "../styles/tailwind.css"

import Header from "./Header.js"
import Footer from "./Footer.js"

const home = () => {
  return (
    <div clasName="container">
      <Header />
      <h1>illa island</h1>
      <ul>
        <li>
          home (logo/hero with nav - circle logo transitions into globe when
          scrolled to next section)
        </li>
        <li id="about">about (globe)</li>
        <li>tech (separate page - digital wave, dark)</li>
        <li>art (separate page - natural wave, light)</li>
        <li id="network">network (boat/island/maps)</li>
        <li>contact (msg in bottle)</li>
      </ul>

      <Footer />
    </div>
  )
}

export default home
