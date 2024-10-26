import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

const Article = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['GET_ALL_POSTS'],
    queryFn: async () => {
      try {
        const result = await axios.get('http://localhost:3001/api/blog/post/allPosts');
        console.log(result.data.data);
        return result.data;
      } catch (error) {
        console.error('Gagal fetching data posts', error);
        throw error;
      }
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold text-red-600">Gagal mendapatkan data</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">News Article</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.data.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:shadow-lg flex flex-col h-auto justify-between cursor-pointer">
            <img className="w-full h-48 object-cover" src={post.thumbnail} />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{post.content.substring(0, 150)}...</p>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full border-2 border-gray-200" src={post.author.profileImg || `https://api.multiavatar.com/${post.author.username}.svg`} />
                <div className="flex flex-col">
                  <p className="text-base text-gray-500 font-medium">{post.author.username}</p>
                  <small className="text-sm text-gray-400">{format(new Date(post.createdAt), 'dd MMMM yyyy')}</small>
                </div>
              </div>
              <small className="text-sm text-gray-400">{post.tags[1]}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
