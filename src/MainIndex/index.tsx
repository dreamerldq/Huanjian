import * as React from 'react'
import {Layout} from 'antd'
const {Header, Content, Footer}  = Layout
// interface IProps{

// }
class MainIndex extends React.Component<any,{}>{
    constructor(props:any){
        super(props)
    }
   public render(){
        return(
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }

}
export default MainIndex