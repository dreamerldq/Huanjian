import * as React from 'react';
import { render, Router, Route } from 'mirrorx'
import Counter from './router/Counter'
import MainIndex from './router/MainIndex'
import './index.css'
import Header from './component/Header/index'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header/>
      <Route path="/" exact={true} component={MainIndex} />
      <Route path="/counter" component={Counter} />
      </React.Fragment>
     
    </Router>
  )
}
render(<App />, document.getElementById('root'))