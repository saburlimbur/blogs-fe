import React from 'react';
import InputFields from '../../elements/Fields';
import Button from '../../elements/Button/Button';
import { useFormik } from 'formik';
import RegisterSchema from '../../../schema/authRegister';
import axios from 'axios';
import Notiflix from 'notiflix';
import { useNavigate } from 'react-router-dom';

const FormRegister = () => {
  const navigate = useNavigate();
  
  const handleRegisterSubmit = async (data) => {
    const userRegister = {
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    try {
      const response = await axios.post('http://localhost:3001/api/blog/user/register', userRegister);
      console.log('User registered:', response.data);

      Notiflix.Notify.success('Registrasi berhasil!');
      resetForm();

      navigate('/login'); 
    } catch (error) {
      if (error.response) {
        Notiflix.Notify.failure(error.response.data.message);
      } else {
        Notiflix.Notify.failure('Terjadi kesalahan, coba lagi nanti!');
      }
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema: RegisterSchema,

    onSubmit: handleRegisterSubmit, 
  });

  return (
    <form className="flex flex-col space-y-6 w-full" onSubmit={handleSubmit}>
      {/* Username */}
      <div>
        <InputFields
          label="Username"
          htmlFor="username"
          type="text"
          name="username"
          id="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your username"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${errors.username && touched.username ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {errors.username && touched.username && <small className="text-red-500 text-xs">{errors.username}</small>}
      </div>

      {/* Email */}
      <div>
        <InputFields
          label="Email"
          htmlFor="email"
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your email"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${errors.email && touched.email ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {errors.email && touched.email && <small className="text-red-500 text-xs">{errors.email}</small>}
      </div>

      {/* Password */}
      <div>
        <InputFields
          label="Password"
          htmlFor="password"
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your password"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${errors.password && touched.password ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {errors.password && touched.password && <small className="text-red-500 text-xs">{errors.password}</small>}
      </div>

      {/* Confirm Password */}
      <div>
        <InputFields
          label="Confirm Password"
          htmlFor="confirmPassword"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Confirm your password"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${errors.confirmPassword && touched.confirmPassword ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {errors.confirmPassword && touched.confirmPassword && <small className="text-red-500 text-xs">{errors.confirmPassword}</small>}
      </div>

      {/* Submit Button */}
      <Button type="submit" className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold">
        Submit
      </Button>
    </form>
  );
};

export default FormRegister;
