import  * as React from 'react'
import mirror, {actions, connect} from 'mirrorx'
mirror.model({
    name: 'counter',
    initialState: 0,
    reducers: {
      increment(state: number) { return state + 1 },
      decrement(state: number) { return state - 1 },
    },
    effects: {
      async incrementAsync() {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 1000)
        })
        actions.counter.increment()
      }
    }
  })
interface IProps{
    count:number,
    match: any
}
interface IState{
  timer: any
}
class Counter extends React.Component<IProps, IState >{
    constructor(props: IProps){
        super(props)
    }
   public componentDidMount(){
      const {props} = this
      if(props.match.path === '/counter'){
      const timer =   setInterval(() => {
          actions.counter.increment()
        },1000)
        this.setState({
          timer
        })
      }
    }
    public componentWillUnmount(){
      clearInterval(this.state.timer)
    }
   public render(){
        const {props} = this
        return(
            <div>
            <h1>{props.count}</h1>
            <button onClick={() => actions.counter.decrement()}>-</button>
            <button onClick={() => actions.counter.increment()}>+</button>
            <button onClick={() => actions.counter.incrementAsync()}>+ Async</button>
          </div>
        )
    }
}
const mapStateToProps = (state:any) => {
    return {count: state.counter}
}
export default connect(mapStateToProps)(Counter)