import React from 'react';
import { LoginForm, RegisterForm } from '../../modules/index';
import { Route } from 'react-router-dom';

import './Auth.scss';

const Auth = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                <Route path={["/","/login"]} component={LoginForm} exact/>
                <Route path="/register" component={RegisterForm}/>
            </div>
        </section>
    );
}

export default Auth;