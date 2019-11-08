import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Button, Block } from '../../../components/index';
import { Link } from 'react-router-dom';

class LoginForm extends Component {



    render() {

        return (
            <>
                <div className="auth__top">
                    <h2>Log In</h2>
                    <p>Please log in to your account</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item alidateStatus='success' hasFeedback>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="login"
                                placeholder="Login"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                                Log in
                            </Button>
                            <Link className="auth__register-link" to="/register">Registration</Link>
                        </Form.Item>
                    </Form>
                </Block>

            </>
        );
    }
}

export default LoginForm;