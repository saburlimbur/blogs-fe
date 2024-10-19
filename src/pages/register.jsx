import React from 'react';
import AuthLayouts from '../components/layouts/Auth/AuthLayouts';
import FormRegister from '../components/fragments/Auth/Register';

const RegisterPage = () => {
  return (
    <AuthLayouts type="register" title="Register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
