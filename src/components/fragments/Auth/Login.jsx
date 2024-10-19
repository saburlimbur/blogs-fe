import React from 'react';
import InputFields from '../../elements/Fields';
import Button from '../../elements/Button/Button';
import { useFormik } from 'formik';
import { LoginSchema } from '../../../schema/authLogin';
import axios from 'axios';
import Notiflix from 'notiflix';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const navigate = useNavigate();
  const handleLoginSubmit = async (data) => {
    const userLogin = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post('http://localhost:3001/api/blog/user/login', userLogin);
      sessionStorage.setItem("token", response.data.token)
      console.log('User loggedin:', response.data);

      Notiflix.Notify.success('Login berhasil!');
      resetForm();

      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        Notiflix.Notify.failure(error.response.data.message);
      } else {
        Notiflix.Notify.failure('Terjadi kesalahan, coba periksa data anda kembali');
      }
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },

    validationSchema: LoginSchema,

    onSubmit: handleLoginSubmit,
  });
  return (
    <>
      <form className="flex flex-col space-y-6 w-full" onSubmit={handleSubmit}>
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
            placeholder="Enter our username"
            className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${errors.username && touched.username ? 'ring-2 ring-red-500' : ''}`}
            autoComplete="off"
          />
          {errors.username && touched.username && <small className="text-red-500 text-xs">{errors.username}</small>}
        </div>

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
            placeholder="Enter our email"
            className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${errors.email && touched.email ? 'ring-2 ring-red-500' : ''}`}
            autoComplete="off"
          />
          {errors.email && touched.email && <small className="text-red-500 text-xs">{errors.email}</small>}
        </div>

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
            placeholder="Enter our password"
            className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${errors.password && touched.password ? 'ring-2 ring-red-500' : ''}`}
            autoComplete="off"
          />
          {errors.password && touched.password && <small className="text-red-500 text-xs">{errors.password}</small>}
        </div>

        <Button type="submit" className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold">
          Submit
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
