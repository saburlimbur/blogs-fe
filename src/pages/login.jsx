import React from 'react';
import AuthLayouts from '../components/layouts/Auth/AuthLayouts';
import FormLogin from '../components/fragments/Auth/Login';

const LoginPage = () => {
  return (
    <AuthLayouts type="login" title="Login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
