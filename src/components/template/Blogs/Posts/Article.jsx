import React from 'react';
import dummyDatax from './dummyArticle';

const Article = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyDatax.map((article) => (
        <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-48" src={article.thumbnail} />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 truncate">{article.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{article.content.substring(0, 150)}...</p>

            <div className='flex justify-between items-center pt-6'>
              <div className="flex items-center gap-3">
                <img src={article.authorProfile} className="w-8 h-8" />
                <span className="text-sm text-gray-500">{article.author}</span>
              </div>
              <span className="text-sm text-gray-400 text-center">{new Date(article.createdAt).toLocaleDateString()}</span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
