import React, { useState, useEffect } from 'react';
import { tokenidez } from '../../../utils/tokenized';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import Button from '../../elements/Button/Button';

const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUserByToken = async () => {
    try {
      const token = tokenidez();
      if (!token) throw new Error('Anda harus login terlebih dahulu');
      const response = await axios.get('http://localhost:3001/api/blog/user/byToken', {
        headers: {
          authorization: token,
        },
      });
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserByToken();
  }, []);

  const Logout = () => {
    const isConfirmed = window.confirm('Apakah Anda yakin ingin keluar?');
    if (isConfirmed) {
      sessionStorage.removeItem('token');
      Notiflix.Notify.success('Berhasil logout');
      navigate('/');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <div className="text-center mb-6">
          <img className="w-24 h-24 rounded-full mx-auto mb-4" src="https://api.multiavatar.com/Starcrasher.svg" alt="Profile" />
          <h1 className="text-xl font-semibold text-gray-800">{data?.username}</h1>
        </div>

        <div className="text-center">
          {data && (
            <>
              <p className="text-gray-600">
                <span className="font-semibold">Name:</span> {data.username}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> {data.email}
              </p>
            </>
          )}
        </div>

        <div className="mt-6 text-center">
          <Button className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors" onClick={Logout}>
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
