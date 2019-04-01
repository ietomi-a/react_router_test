import React from "react"

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"


const Home = () => (
    <div>
      <h1>hello my app</h1>
      <p> choose language</p>
      <ul>
        <li><a href='/ja'> Japanese </a></li>
        <li><a href='/en'> English </a></li>
        <li><a href='/cn'> Chinese </a></li>
      </ul>    
    </div>
)


const HelloJapanese = () => (
    <div>
      <h1>こんにちは</h1>
      <p><a href='/'> back </a></p>
    </div>
)

const HelloEnglish = () => (
    <div>
      <h1>hello</h1>
      <p><a href='/'> back </a></p>
    </div>
)

const HelloChinese = () => (
    <div>
      <h1>にいはお</h1>
      <p><a href='/'> back </a></p>
    </div>
)

const HelloApp = () => (
    <Router>
      <div style={{margin: 20}}>
        <Route exact path='/' component={Home} />
        <Route path='/ja' component={HelloJapanese} />
        <Route path='/en' component={HelloEnglish} />
        <Route path='/cn' component={HelloChinese} />        
      </div>
    </Router>
)

export default HelloApp
