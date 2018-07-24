import * as React from 'react'

import './index.css'


interface IState{
    current: string
}
class MainIndex extends React.Component<any,IState>{
    constructor(props:any){
        super(props)
        this.state={
            current:''
        }
    }
   
   public render(){
        return(
            <div>
                主页
            </div>
        )
            
    }

}
export default MainIndex