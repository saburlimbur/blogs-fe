import React, { useState, useEffect } from 'react';
import { tokenidez } from '../../../utils/tokenized';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import Button from '../../elements/Button/Button';
import { AiOutlineLogout } from 'react-icons/ai';
import { HiChevronDown } from 'react-icons/hi';
import { HiChevronUp } from 'react-icons/hi';

const ProfileSidebar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dataCombobox = [
    {
      value: 'Profile',
      label: 'Profile',
    },

    {
      value: 'Logout',
      label: 'Logout',
    },
  ];

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
    <section className="flex justify-between p-3 hover:bg-gray-100 transition-all ease-in rounded-xl cursor-pointer">
      <div className="flex items-center gap-3">
        <img className="w-12 h-12 rounded-full border-indigo-500" src={`https://api.multiavatar.com/${data.username}.svg || user.svg`} />
        {data && (
          <div className="flex flex-col text-left">
            <h1 className="text-base font-semibold text-gray-800">{data?.username}</h1>
            <p className="text-gray-600 text-sm">{data?.email}</p>
          </div>
        )}
      </div>
      <div className="ml-auto mt-4">
        <Button className="bg-transparent p-2 rounded-full hover:bg-gray-200 transition-colors" onClick={Logout}>
          {/* <AiOutlineLogout className="text-2xl text-gray-800 hover:text-red-500" /> */}
          <div className="flex flex-col gap-0">
            <HiChevronUp size={16} />
            <HiChevronDown size={16} />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default ProfileSidebar;
