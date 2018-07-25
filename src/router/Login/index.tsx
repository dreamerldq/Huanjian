import * as React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.css'

const FormItem = Form.Item
interface IState{
    current: string
}
interface IProps{
    form:any
}
class Login extends React.Component<IProps, IState> {
   public handleSubmit = (e:any) => {
      e.preventDefault();
      this.props.form.validateFields((err:any, values:any) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
   public render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login_container">
            <div className="form_container">
            <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登陆
            </Button>
          </FormItem>
            </div>
        </Form>
      );
    }
  }
  
export default Form.create()(Login)