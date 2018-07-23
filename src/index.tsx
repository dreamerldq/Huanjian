import * as React from 'react';
import { render, Router, Route } from 'mirrorx'
import Counter from './Counter'



const App = () => {
  return (
    <Router>
      <Route path="/counter" component={Counter} />
    </Router>
  )
}

// 启动 app，render 方法是加强版的 ReactDOM.render
render(<App />, document.getElementById('root'))