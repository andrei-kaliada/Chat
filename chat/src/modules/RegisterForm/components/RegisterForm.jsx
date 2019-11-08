import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Button, Block } from '../../../components/index';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
    render() {
        return (
            <>
                <div className="auth__top">
                    <h2>Registration</h2>
                    <p>To enter the chat you need to register</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item alidateStatus='success' hasFeedback>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="email"
                                placeholder="E-Mail"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="user"
                                placeholder="Your name"
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
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Repeat password"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                            Registration
                            </Button>
                            <Link className="auth__register-link" to="/register">Log In</Link>
                        </Form.Item>
                    </Form>
                </Block>

            </>
        );
    }
}

export default RegisterForm;