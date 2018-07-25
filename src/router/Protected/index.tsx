import * as React from 'react'
import {connect,Redirect} from 'mirrorx'

interface IProps{
    auth: boolean,
    location: any
}
class Protected extends React.Component<IProps>{
   public render(){
       const {auth} = this.props
        return(
            auth?
            <h1>
            这是一个受保护的界面
        </h1>
            :
            <Redirect
          to={{
            pathname: "/login",
            state: { from: this.props.location }
          }}
        />

        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        auth: state.app.auth
    }
}
export default connect(mapStateToProps)(Protected)