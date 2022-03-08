import React from "react";
import '../styles/home.css'
import logo from '../images/logo.svg'

function Home() {
  return (
    <div class="wrapper">
      <h1>Welcome to React Workbench</h1>
      <p>This is where i practice and learn my react.js</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Home;