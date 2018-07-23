import * as React from 'react';
import  { render} from 'mirrorx'
import Counter from './Counter'



const App = () =>{
  return <Counter></Counter>
}

// 启动 app，render 方法是加强版的 ReactDOM.render
render(<App/>, document.getElementById('root'))