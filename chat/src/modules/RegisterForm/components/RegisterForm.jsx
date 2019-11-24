import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Button, Block } from '../../../components/index';
import { Link } from 'react-router-dom';
import { validateForm } from '../../../utils/helpers/index';


const RegisterForm = (props) => {

        const success = true;
        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty
          } = props;

        return (
            <>
           
                <div className="auth__top">
                    <h2>Registration</h2>
                    <p>To enter the chat you need to register</p>
                </div>
                <Block>
                    { success ?
                    (<Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item 
                        validateStatus={validateForm('email', errors, touched)}
                         hasFeedback
                         help={!touched.email ? "" : errors.email}
                         >
                            <Input
                                id="email"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="email"
                                placeholder="E-Mail"
                                size="large"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
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
                        <Form.Item
                         validateStatus={validateForm('password', errors, touched)} 
                         hasFeedback
                         help={!touched.password ? "" : errors.password}
                         >
                            <Input
                               id="password"
                               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password2"
                               placeholder="Password"
                               size="large"
                               value={values.password}
                               onChange={handleChange}
                               onBlur={handleBlur}
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
                            {!isValid && dirty && <span>Error</span>}
                            <Button
                             type="primary"
                              htmlType="submit" 
                              className="login-form-button" 
                              size="large"
                              onClick={handleSubmit}
                              >
                            Registration
                            </Button>
                            <Link className="auth__register-link" to="/login">Log In</Link>
                        </Form.Item>
                    </Form>) 
                     :(<div className="auth__success-block">
                         <div>
                            <Icon type="info-circle" style={{fontSize:"50px", color:'blue',}}/>
                         </div>
                        <h2>Verify your account</h2>
                        <p>A letter was sent to your mail with a link to the account confirmation</p>
                     </div>)
                     }
                </Block>
            </>
        );
    }

export default RegisterForm;