import React, { Component } from 'react';
import { Form, Icon, Input, Checkbox } from 'antd';
import { Button, Block } from '../../components/index';
import './Auth.scss';

class Auth extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };

    

    render() {

        const { getFieldDecorator } = this.props.form;
        
        return (
            <section className="auth">
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>Log In</h2>
                        <p>Please log in your account</p>
                    </div>
                    <Block>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item alidateStatus='success' hasFeedback>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                size="large"
                                v
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                size="large"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>

                            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                                Log in
                            </Button>
                            <a className="auth__register-link" href="#">Registration</a>
                            </Form.Item>
                        </Form>
                    </Block>
                </div>
            </section>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'auth' })(Auth);

export default WrappedNormalLoginForm;