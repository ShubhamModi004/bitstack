import * as React from "react"

import Preloader from "../components/Preloader/Preloader";
import Timer from "../components/Countdown/Timer";
import Optin from "../components/Optin/Optin";

import '../styles/common.css'

// markup
const IndexPage = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Coming Soon
        </h1>
        <Optin />
        <Preloader />
      </div>
    </div>
  )
}

export default IndexPage
