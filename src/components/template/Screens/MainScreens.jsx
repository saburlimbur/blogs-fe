import React from 'react';
import Article from '../Blogs/Posts/Article';

const MainScreens = () => {
  return (
    <section className="flex justify-center h-full">
      <div className="w-full max-w-7xl">
        <p className="text-lg text-center mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem reprehenderit aperiam natus consequatur unde incidunt placeat officiis, amet animi, obcaecati provident magni. Nihil cupiditate consequuntur dolor, odit animi a
          voluptatum!
        </p>
        <Article />
      </div>
    </section>
  );
};

export default MainScreens;
