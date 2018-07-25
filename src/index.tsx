import * as React from 'react';
import { render, Router, Route, withRouter } from 'mirrorx'
import Counter from './router/Counter'
import MainIndex from './router/MainIndex'
import './index.css'
import Header from './component/Header/index'
import Login from './router/Login'
const RouteHeader = withRouter(Header)
const App = () => {
  return (
    <Router>
      <React.Fragment>
      <RouteHeader/>
      <Route path="/" exact={true} component={MainIndex} />
      <Route path="/login" component={Login}/>
      <Route path="/counter" component={Counter} />
      </React.Fragment>
     
    </Router>
  )
}
render(<App />, document.getElementById('root'))