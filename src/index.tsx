import * as React from 'react';
import { render, Router, Route, withRouter } from 'mirrorx'
import Counter from './router/Counter'
import MainIndex from './router/MainIndex'
import Protected from './router/Protected'
import './index.css'
import Header from './component/Header/index'
import Login from './router/Login'
import mirror from 'mirrorx'
import {getcaidan} from './service/login'
interface IState{
  auth: boolean
}
// interface IProps{
//   auth: boolean,
//   location: any
// }
mirror.model({
    name: 'app',
    initialState: {
      auth: false
    },
    reducers: {
      authSwitch(state: IState ){return {...state, auth: !state.auth}}
    },
    effects: {
      async getcaidan(data:any, getState:any) {
           const res = await getcaidan('红烧肉')
           console.log("数据", res)
         }
    }
  })
const RouteHeader = withRouter(Header)
class App extends React.Component {
  constructor(props: any){
    super(props)

  }
 public render(){
  //  const {auth} = this.props

  return (
    <Router>
      <React.Fragment>
      <RouteHeader/>
      <Route path="/" exact={true} component={MainIndex} />
      <Route path="/login" component={Login} />
      <Route path="/protected" component={Protected}/>
      <Route path="/counter" component={Counter} />
      </React.Fragment>
     
    </Router>
  )
  }

}

  // const mapStateToProps = (state: any) => {
  //   return {auth: state.app.auth}
  // }
// const FinalApp = connect(mapStateToProps)(App)
render(<App />, document.getElementById('root'))