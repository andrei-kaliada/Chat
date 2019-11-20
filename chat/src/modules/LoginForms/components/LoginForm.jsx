import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Button, Block } from '../../../components/index';
import { Link } from 'react-router-dom';


const validate = ( key, errors, touched ) => {

    if(touched[key]){
        
        if(errors[key]){
            return 'error';
        } else{
            return 'success';
        }
    }else {
        return '';
    }
} 


const LoginForm = (props) => {

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
                <h2>Log In</h2>
                <p>Please log in to your account</p>
            </div>
            <Block>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item
                        validateStatus={ validate('email', errors, touched)}
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
                    <Form.Item
                        validateStatus={!touched.password ? "" : errors.password ? "error" : "success"} hasFeedback
                        help={!touched.password ? "" : errors.password}
                    >
                        <Input
                            id="password"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            size="large"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        {/* {!isValid && dirty && <span>Error</span>} */}
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            size="large"
                            onClick={handleSubmit}
                        >
                            Log In
                        </Button>
                        <Link className="auth__register-link" to="/register">Registration</Link>
                    </Form.Item>
                </Form>
            </Block>
        </>
    );
}


export default LoginForm;