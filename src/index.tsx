import * as React from 'react';
import { render, Router, Route } from 'mirrorx'
import Counter from './Counter'
import MainIndex from './MainIndex'
import './index.css'

const App = () => {
  return (
    <Router>
      <div>
      <Route path="/" component={MainIndex} />
      <Route path="/counter" component={Counter} />
      </div>
     
    </Router>
  )
}

// 启动 app，render 方法是加强版的 ReactDOM.render
render(<App />, document.getElementById('root'))