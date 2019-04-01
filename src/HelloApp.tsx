import * as React from "react"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom"


const Home = () => (
    <div>
      <h1>hello my app</h1>
      <p> choose language</p>
      <ul>
        <li><Link to='/ja'> Japanese </Link></li>
        <li><Link to='/en'> English </Link></li>
        <li><Link to='/cn'> Chinese </Link></li>
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
    <div>
      <h1>hello my app</h1>
      <p> choose language</p>
    <Switch>
      <Route exact path='/' component={Home} />      
      <Route path='/ja' component={HelloJapanese} />
      <Route path='/en' component={HelloEnglish} />
      <Route path='/cn' component={HelloChinese} />
    </Switch>    
    </div>
    </Router>
)

export default HelloApp
