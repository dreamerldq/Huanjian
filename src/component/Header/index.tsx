import * as  React from 'react'
import { Layout } from 'antd'
import { Menu } from 'antd'
import  {actions} from 'mirrorx'
import './index.css'
const { Header } = Layout

const { Item } = Menu
interface IState {
    current: string
}
class AppHeader extends React.Component<any, IState>{
    constructor(props: any) {
        super(props)
        this.state = {
            current: 'state'
        }
    }
    public handleClick = (e: any) => {
        if(e.key === 'state'){
            actions.routing.push(`/`)
        }else{
            actions.routing.push(`/${e.key}`)
        }
        this.setState({
            current: e.key,
        });
    }
    public render() {
        return (
            <React.Fragment>
                <Header className="header">
                    <Menu
                        className="header_menu"
                        // theme="dark"
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Item key="state">
                            状态
                        </Item>
                        <Item key="check">
                            发票审核
                         </Item>
                        <Item key="history">
                            历史账单
                         </Item>
                        <Item key="counter">
                            计数器
                        </Item>
                    </Menu>

                </Header>
            </React.Fragment>
        )
    }

}
export default AppHeader